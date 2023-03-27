import { APIEvent, json } from "solid-start/api";
import { summarize } from "~/lib/summary";
import dotenv from "dotenv";
dotenv.config();

export async function GET({ params, request }: APIEvent) {
  const key = request.headers.get("x-api-key");
  if (key !== process.env.BOT_KEY)
    return new Response("Invalid API key", { status: 401 });
  const summary = await summarize(params.id);
  if (summary?.content) return json(summary.content);
  return json("Failed to summarize");
}
