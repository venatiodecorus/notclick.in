import { parseSubs } from "./youtube";
import { getSummary } from "./openai";

export async function summarize(id: string) {
    const subs = await parseSubs(id);
    const res = await getSummary(subs.slice(0, 500));
    return res;
}