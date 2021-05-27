const get = async (input: RequestInfo, init?: RequestInit) => {
    const resp = await fetch(`${API_ENDPOINT}${input}`, init);
    if(!resp.ok) throw new Error("A kiszolgáló nem érhető el!");

    const data = await resp.json();
    if(data.error) throw new Error(data.message);

    return data;
};

export const WEBSITE_URL = process.env.NODE_ENV === "production" ? "https://minelegion.hu" : "http://localhost:3000";
export const API_ENDPOINT = `${WEBSITE_URL}/api`;

export default get;