import { User } from ".prisma/client";
import { RoleType } from "@lib/client/api/role";
import prisma from "./prisma";

export default class Roles {
    public static async get(user: User): Promise<RoleType> {
        let resp: RoleType = "default";

        const rank = await prisma.luckpermsPlayer.findFirst({
            where: {
                username: user.username,
            },
        });

        if(rank) {
            // @ts-ignore
            resp = rank.primary_group
        }

        return resp;
    }
}