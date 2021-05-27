import prisma from "@lib/server/prisma";
import Roles from "@lib/server/roles";
import User from "@lib/server/user";
import wrapper from "@lib/server/wrapper";
import { roles as roleList } from "@lib/client/api/role";
import DiscordServer from "@lib/server/discord";


export default wrapper(async (req) => {
    const user = await User.get(req);
    const discord = new DiscordServer();

    await discord.disconnect(user);

    return {
        message: "Sikeresen szétkapcsoltad a Discord fiókodat!",
        data: {},
    };
});