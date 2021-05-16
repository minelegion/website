import sharp from "sharp";
import stream from "stream";
import wrapper from "@lib/server/wrapper";
import { API_ENDPOINT } from "@lib/client/fetch/get";

export default wrapper(async (req, res) => {
    const username: string = req.query["username"] + "";

    const request = require('request');
    const ps = new stream.PassThrough() // <---- this makes a trick with stream error handling

    res.setHeader('Cache-Control', 's-maxage=2419200, stale-while-revalidate, max-age=2419200');

    let url = `${API_ENDPOINT}/skin/${username}`;
    request({ url, encoding: null }, (err, resp, buffer) => {
        let r = sharp(buffer).extract({
            top: 8,
            left: 8,
            width: 8,
            height: 8
        }).resize({
            kernel: sharp.kernel.nearest,
            width: 64
        }).toFormat("webp", {
            quality: 85
        });


        stream.pipeline(
            r,
            ps, // <---- this makes a trick with stream error handling
            (err) => {
                if (err) {
                    console.log(err) // No such file or any other kind of error
                    return res.status(400);
                }
            })
        ps.pipe(res)
        res.statusCode = 200;
    });
});