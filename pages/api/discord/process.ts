import { roles as roleList } from "@lib/client/api/role";
import prisma from "@lib/server/prisma";
import { User as PrismaUser } from "@prisma/client";
import Roles from "@lib/server/roles";
import User from "@lib/server/user";
import wrapper from "@lib/server/wrapper";
import DiscordServer from "@lib/server/discord";

 
type QueryType = {
    code: string;
    state: string;
};

export default wrapper(async (req) => {
    const user = await User.get(req);
    await check(user);

    // @ts-ignore
    const { code }: QueryType = req.query;

    const discord = new DiscordServer();
    const account = await discord.connect({
        user,
        code,
    });

    return {
        message: "Sikeres összekapcsolás!",
        data: account,
    };
});

const check = async (user: PrismaUser) => {
    const checker = await prisma.user.findUnique({
        where: {
            id: user.id,
        },
        include: {
            discord: true,
        },
    });

    if(checker?.discord) throw new Error("Már van csatlakoztatva egy Discord fiók ehhez a felhasználóhoz!");
};