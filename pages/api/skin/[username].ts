import prisma from '@lib/server/prisma';
import wrapper from '@lib/server/wrapper';
import { NextApiRequest, NextApiResponse } from 'next';

const base64 = require('base-64');
const request = require('request');

export default wrapper(async (req, res) => {
    const username: string = req.query["username"]+"";

    const skin = null; 
    /*
    await prisma.skins.findOne({
        where: {
            Nick: username
        }
    });
    */

    res.setHeader('Cache-Control', 's-maxage=2419200, stale-while-revalidate, max-age=2419200');

    if(skin === null) {
        request.get(`https://mc-heads.net/skin/${username}`).pipe(res);
        return;
    }

    const data = JSON.parse(base64.decode(skin.Value));

    var skinUrl = data.textures.SKIN.url;

    request.get(skinUrl).pipe(res);
    res.statusCode = 200;
});
