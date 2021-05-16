import prisma from "@lib/server/prisma";
import User from "@lib/server/user";
import wrapper from "@lib/server/wrapper";

export default wrapper(async (req) => {
    const user = await User.get(req);

    await prisma.skin.delete({
        where: {
            username: user.username,
        },
    });

    return {
        message: "Kinézet sikeresen visszaállítva!",
        data: {},
    };
});