import post from "../fetch/post";

export default class Skin {
    public static async upload(file: File) {
        const formData = new FormData();
        formData.append("skin", file);
        
        const resp = await post("/api/skin/change", {
            body: formData,
        });

        return resp;
    }

    public static async reset() {
        const resp = await post("/api/skin/reset");

        return resp;
    }
}