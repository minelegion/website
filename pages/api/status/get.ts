import wrapper from "@lib/server/wrapper";
import { getStatus } from "mc-server-status";

export default wrapper(async () => {
    const status = await getStatus("play.minelegion.hu");

    return {
        data: status,
    };
});