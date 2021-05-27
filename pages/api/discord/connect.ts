import DiscordServer from "@lib/server/discord";
import wrapper from "@lib/server/wrapper";

const discord = new DiscordServer();

export default wrapper(async () => {
    const url = await discord.oauth.generateAuthUrl({
        scope: [
            "identify",
            "guilds.join",
            "guilds",
        ],
    });
    
    return {
        data: url,
    };
});