import FormData from "form-data";
import { ReadStream } from "fs";

export default class Skin {
    public static async generate(file: ReadStream) {
        type ResponseType = {
            data: {
              uuid: string,
              texture: {
                value: string,
                signature: string,
                url: string
              },
            },
        };
        const formData = new FormData();

        formData.append("file", file);
        formData.append("visibility", "0");

        const resp = await fetch("https://api.mineskin.org/generate/upload", {
            method: "POST",
            headers: {
                "User-Agent": "MineLegion/v1.0",
            },
            // @ts-ignore
            body: formData,
        });

        if(!resp.ok) throw new Error("A MineSkin szolgáltatás nem elérhető!");

        const { data: { texture }}: ResponseType = await resp.json(); 

        return texture;
    }
}