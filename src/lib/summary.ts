import { parseSubs } from "./youtube";
import { getSummary } from "./openai";
import { useNavigate } from "solid-start";

export async function summarize(id: string) {
    const subs = await parseSubs(id);
    if(!subs) return null;
    const res = await getSummary(subs.slice(0, 1024));
    return res;
}