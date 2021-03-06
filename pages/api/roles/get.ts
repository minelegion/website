import { RoleType } from "@lib/client/api/role";
import prisma from "@lib/server/prisma";
import Roles from "@lib/server/roles";
import User from "@lib/server/user";
import wrapper from "@lib/server/wrapper";

export default wrapper(async (req) => {
    const user = await User.get(req);
    const data = await Roles.get(user);

    return {
        data,
    };
});