import youtubeDl from "youtube-dl-exec";
import fs from "fs";
import { parseStringPromise } from "xml2js";

export async function getVideoSubs(videoID: string) {
    return await youtubeDl(`https://www.youtube.com/watch?v=${videoID}`, {
        skipDownload: true,
        writeAutoSub: true,
        subFormat: "ttml",
        subLang: "en",
        output: "./public/captions/%(id)s.%(ext)s",
    });
}

export async function parseSubs(videoID: string) {
    try {
        const files = await fs.readdirSync("./public/captions");
        let xml = '';
        if (!files.includes(`${videoID}.en.ttml`)) {
            await getVideoSubs(videoID);
            xml = await fs.readFileSync(`./public/captions/${videoID}.en.ttml`, 'utf8');
        } else {
            xml = await fs.readFileSync(`./public/captions/${videoID}.en.ttml`, 'utf8');
        }
        const json = await parseStringPromise(xml);
        const text = json?.tt?.body?.[0]?.div?.[0]?.p;
        const output = text?.map((p: any) => p._);
        return output.join(' ');
    } catch(e) {
        return null;
    }
}