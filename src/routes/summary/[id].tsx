import { Title } from "solid-start";
import { RouteDataArgs, useRouteData } from "solid-start";
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

    return (
        <main>
            <Title>Summary</Title>
            <div class="summary">{video()?.content}</div>
        </main>
    );
}
