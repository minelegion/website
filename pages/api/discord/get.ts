import prisma from "@lib/server/prisma";
import User from "@lib/server/user";
import wrapper from "@lib/server/wrapper";

export default wrapper(async (req) => {
    const user = await User.get(req);
    
    const { discord } = await prisma.user.findUnique({
        where: {
            id: user.id,
        },
        include: {
            discord: true,
        },
    });

    return {
        data: discord,
    };
});