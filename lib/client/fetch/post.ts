import get from "./get";

const post = async (input: RequestInfo, init?: RequestInit) => {
    const data = await get(input, {
        ...init,
        method: "POST",
    });

    return data;
};

export default post;