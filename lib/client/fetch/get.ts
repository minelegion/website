const get = async (input: RequestInfo, init?: RequestInit) => {
    const resp = await fetch(input, init);
    if(!resp.ok) throw new Error("A kiszolgáló nem érhető el!");

    const data = await resp.json();
    if(data.error) throw new Error(data.message);

    return data;
};

export const API_ENDPOINT = process.env.NODE_ENV === "production" ? "https://minelegion.hu/api" : "http://localhost:3000/api"

export default get;