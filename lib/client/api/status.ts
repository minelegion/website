import get from "../fetch/get";
import { Status as ResponseType } from "mc-server-status";

export default class Status {
    public static async get(): Promise<ResponseType> {
        return (await get("/status/get")).data;
    }
}