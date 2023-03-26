import { createSignal } from "solid-js";
import { useNavigate } from "solid-start";
import "./Input.css";

export default function Input() {
	const navigate = useNavigate();
	const [video, setVideo] = createSignal('');

	function handleSubmit(e: Event) {
		e.preventDefault();
		const test = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/gi;
		const res = test?.exec(video())?.[1];
		console.log(res);
		if (res) {
			navigate(`/summary/${res}`);
		} else {
			navigate(`/error`);
		}
	}

	return (
		<form>
			<input class="idinput" type="text" value={video()} onChange={e => setVideo(e.currentTarget.value)} placeholder="Paste YouTube URL" />
			<button class="submit" onClick={handleSubmit}>Summarize</button>
		</form>
	);
}
