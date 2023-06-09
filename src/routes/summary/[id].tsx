import { Title } from "solid-start";
import { RouteDataArgs, useRouteData, useNavigate } from "solid-start";
import { Show } from "solid-js";
import { createServerData$ } from "solid-start/server";
import { summarize } from "~/lib/summary";
import "./[id].css"

export function routeData({params}: RouteDataArgs) {
    return createServerData$(
        ([id]) => summarize(id),
        { key: () => [params.id] }
      );
}

export default function Summary() {
    const video = useRouteData<typeof routeData>();
    const navigate = useNavigate();

    if(video.state === 'errored') {
        navigate(`/error`);
    }

    return (
        <main>
            <Title>Summary</Title>
            <Show when={video()?.content} fallback={<div class="summary">We were unable to retrieve subtitles for this video.<div class="try-again"><a href="/">Try another video.</a></div></div>}>
                <div class="summary">{video()?.content}</div>
                <div class="try-again"><a href="/">Summarize another video</a></div>
            </Show>
        </main>
    );
}
