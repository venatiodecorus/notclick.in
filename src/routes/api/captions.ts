// import { APIEvent, json } from 'solid-start/api';
// import { getVideoSubs, parseSubs } from '~/lib/youtube';
// import { getSummary } from '~/lib/openai';

// export async function GET({params}: APIEvent) {
//     const subs = await getVideoSubs(params.videoId);
//     return json(subs);
//     //return new Response(`video id is ${params.videoId}`);
// }

// export async function POST({request}: APIEvent) {
//     const body = await new Response(request.body).json();
//     const subs = await parseSubs(body.videoId);
//     // TODO multiple requests for longer videos
//     const res = await getSummary(subs.slice(0, 500));
//     return json(res);
// }


// For local testing