import { NextApiRequest, NextApiResponse } from "next";

type ResponseType<T> = {
    message?: string;
    data: T;
};

/**
 * A wrapper function for API endpoints for easier developement
 * @param endpoint An async function to handle necessary calculations
 * @returns The data to be sent to the user
 */
const wrapper = <T = {}>(endpoint: (req: NextApiRequest, res?: NextApiResponse) => Promise<ResponseType<T> | void>) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const resp = await endpoint(req, res);
            if(resp) res.json(resp);
        } catch(e) {
            res.json({
                error: true,
                message: e.message,
                data: e.data,
            });
        }
    };
};

export default wrapper;