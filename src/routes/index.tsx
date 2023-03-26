import { Title } from "solid-start";
// import YTSummarize from "~/components/YTSummarize";
import Input from "~/components/Input";
import "./index.css";

export default function Home() {
  return (
    <main>
      <Title>notclick.in</Title>
      <h1>notclick.in</h1>
      <p class="tagline">Summarize any YouTube video with ChatGPT.</p>
      <Input />
    </main>
  );
}
