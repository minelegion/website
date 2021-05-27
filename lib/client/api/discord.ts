import { Discord as PrismaDiscord } from "@prisma/client";
import get from "../fetch/get";

export default class Discord {
    public static async get(): Promise<PrismaDiscord> {
        const resp = await get("/discord/get");
        return resp.data;
    }

    public static async connect(): Promise<string> {
        return (await get("/discord/connect")).data;
    }

    public static async disconnect(): Promise<{ message: string }> {
        return await get("/discord/disconnect");
    }

    public static async process(code: string) {
        const resp: {
            message: string;
            data: PrismaDiscord;
        } = await get(`/discord/process?code=${code}`);

        return resp;
    }
}