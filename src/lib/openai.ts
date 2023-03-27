import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();

const configuration = new Configuration({
    organization: process.env.OPENAI_ORG,
    apiKey: process.env.OPENAI,
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

export async function getSummary(text: string) {
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{"role": "system", "content": "You are an assistant that generates helpful, concise summaries of YouTube videos from their subtitles. Interpret each message as a video transcript and summarize."}, {"role": "user", "content": text}],
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0
    });
    return response.data.choices[0].message;
}
