import wrapper from "@lib/server/wrapper";
import { IncomingForm, Files } from "formidable";
import { NextApiRequest } from "next";
import fs from "fs";
import Skin from "@lib/server/skin";
import prisma from "@lib/server/prisma";
import User from "@lib/server/user";

export const config = {
    api: {
        bodyParser: false,
    },
};

export default wrapper(async (req) => {
    const files = await parse(req);
    const skin = files["skin"];
    if(Array.isArray(skin)) throw new Error("Only one skin can be used");

    console.log(skin);

    const buffer = fs.createReadStream(skin.path);
    const resp = await Skin.generate(buffer);
    const user = await User.get(req);

    const check = await prisma.skin.findUnique({
        where: {
            username: user.username,
        },
    });

    if(check) {
        await prisma.skin.update({
            where: {
                username: user.username,
            },
            data: {
                value: resp.value,
                signature: resp.signature,
                timestamp: "9223243187835955807",
            },
        });
    } else {
        await prisma.skin.create({
            data: {
                username: user.username,
                value: resp.value,
                signature: resp.signature,
                timestamp: "9223243187835955807",
            },
        });
    }

    return {
        message: "Sikeres kinézet feltöltés!",
        data: resp,
    };
});

const parse = (req: NextApiRequest): Promise<Files> => {
    return new Promise((resolve, reject) => {
        const form = new IncomingForm();
        
        form.parse(req, (err, fields, files) => {
            resolve(files);
        });
    });
};