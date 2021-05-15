import { NextApiRequest } from "next";
import { getSession } from "next-auth/client";
import prisma from "./prisma";

export default class User {
    /**
     * Gets the currently logged in user on the backend
     * @throws error if not logged in
     * @param req NextApiRequest
     * @returns {User}
     */
    public static async get(req: NextApiRequest) {
        const throwError = () => {
            throw new Error("Nem vagy bejelentkezve!");
        };
        
        const session = await getSession({
            req,
        });

        if(!session) throwError();

        const user = await prisma.user.findUnique({
            where: {
                username: session.user.name,
            },
        });

        if(!user) throwError();

        return user;
    }
}