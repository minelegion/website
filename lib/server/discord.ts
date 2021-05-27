import { User } from ".prisma/client";
import { WEBSITE_URL } from "@lib/client/fetch/get";
import DiscordOauth2 from "discord-oauth2";
import Discord, { Guild, GuildMember } from "discord.js";
import { roles as roleList } from "@lib/client/api/role";
import Roles from "./roles";
import prisma from "./prisma";

export default class DiscordServer {
    public GUILD_ID = "843522541694746684";

    public client: Discord.Client;
    public oauth: DiscordOauth2;

    private isLoggedIn: boolean = false;

    constructor() {
        this.client = new Discord.Client();
        this.oauth = new DiscordOauth2({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            redirectUri: `${WEBSITE_URL}/dashboard/discord`,
        });
    }

    public async login() {
        if(this.isLoggedIn) return;

        await this.client.login(process.env.DISCORD_BOT_TOKEN);
        this.isLoggedIn = true;

        return; 
    }

    public async connect({ code, user }: { code: string, user: User }) { 
        await this.login();
        
        const { access_token } = await this.oauth.tokenRequest({
            code,
            scope: [
                "identify",
                "guilds",
                "guilds.join"
            ],
            grantType: "authorization_code",
        });

        const account = await this.oauth.getUser(access_token);
        const roles = await this.getRoles(user);

        const guild = await this.getGuild(this.GUILD_ID);
        const members = await this.getMembers(guild);

        const member: GuildMember = members.get(account.id);

        for(const role of roles) {
            await member.roles.add(role);
        }

            
        const newUser = await prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                discord: {
                    connectOrCreate: {
                        create: {
                            id: account.id,
                            username: account.username,
                            avatar: account.avatar,
                        },
                        where: {
                            id: account.id,
                        },
                    }
                },
            },
            include: {
                discord: true,
            }
        });

        return newUser.discord;
    }

    public async disconnect(user: User) {
        const roles = await this.getRoles(user);
        const { discord } = await prisma.user.findUnique({
            where: {
                id: user.id,
            },
            include: {
                discord: true,
            },
        });

        if(!discord) throw new Error("Még nincs összekapcsolva!");

        const guild = await this.getGuild(this.GUILD_ID);
        const members = await this.getMembers(guild);

        const member: GuildMember = members.get(discord.id);
        if(member) {
            for(const role of roles) {
                await member.roles.remove(role);
            }
        }

        await prisma.discord.delete({
            where: {
                id: discord.id,
            },
        });

        return;
    }

    private async getGuild(id: string, retry?: number): Promise<Guild> {
        await this.login();

        try {
            const guild = await this.client.guilds.fetch(this.GUILD_ID);
            return guild;
        } catch {
            if(retry >= 3) return;
            return await this.getGuild(id, retry ? retry + 1 : 1);
        }
    }

    private async getMembers(guild: Guild, retry?: number) {
        await this.login();

        try {
            const members = await guild.members.fetch();
            return members;
        } catch {
            if(retry >= 3) return;
            return await this.getMembers(guild, retry ? retry + 1 : 1);
        }
    }

    private async getRoles(user: User) {
        const roles = [
            "847196522793271357", // Összekapcsolt fiók
        ];

        const role = roleList[await Roles.get(user)];
    
        if("discord" in role) {
            roles.push(role.discord);
        }

        return roles;
    }
}