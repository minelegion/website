import NextAuth, { NextAuthOptions, User } from "next-auth";
import Adapters from "next-auth/adapters";
import Providers from "next-auth/providers";
import prisma from "@lib/server/prisma";
import bcrypt from "bcryptjs";

const options: NextAuthOptions = {
    session: {
        jwt: true,
    },
    providers: [
        Providers.Credentials({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                },
                password: {
                    label: "Password",
                    type: "password",
                },
            },
            authorize: async (credentials) => {
                const user = await prisma.user.findUnique({
                    where: {
                        username: credentials["username"],
                    },
                });

                if(!user) throw new Error("Nem létezik ez a felhasználó!");
                if(!(await bcrypt.compare(credentials["password"], user.password))) throw new Error("Hibás felhasználónév/jelszó páros!");

                const response: User = {
                    name: user.realname,
                };

                return response;
            },
        }),
    ],
    pages: {
        signIn: "/dashboard/auth/signin"
    },
    adapter: Adapters.Prisma.Adapter({ prisma }),
};

export default (req, res) => NextAuth(req, res, options);