import { RoleType } from "@lib/client/api/role";
import prisma from "@lib/server/prisma";
import User from "@lib/server/user";
import wrapper from "@lib/server/wrapper";

export default wrapper(async (req) => {
    let data: RoleType = "default";
    const user = await User.get(req);

    const rank = await prisma.user.findUnique({
        where: {
            username: user.username,
        },
        include: {
            lp: true,
        },
    });

    if(rank) {
        // @ts-ignore
        data = rank.lp.primary_group;
    }

    return {
        data,
    };
});