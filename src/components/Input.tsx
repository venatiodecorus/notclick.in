import { createSignal } from "solid-js";
import { useNavigate } from "solid-start";
import "./Input.css";

export default function Input() {
	const navigate = useNavigate();
	const [video, setVideo] = createSignal('');

	function handleSubmit(e: Event) {
		e.preventDefault();

    // don't allow user to submit a blank request
    if (!video()) return;
    
    // disable the button while the request is being made
    const button = document.querySelector("button")!;
    button.setAttribute("disabled", "true");
    button.innerHTML = `<img class="spinner" width="20" height="20" src="/spinner.svg" alt="spinner" />`;

		const test = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/gi;
		const res = test?.exec(video())?.[1];
		console.log(res);
		if (res) {
			navigate(`/summary/${res}`);
		} else {
			navigate(`/error`);
		}
	}

	return (
    <div class="form">
		<form>
			<input class="idinput" type="text" value={video()} onChange={e => setVideo(e.currentTarget.value)} placeholder="Paste YouTube URL.." />
			<button class="submit" onClick={handleSubmit}>Summarize</button>
		</form>
    </div>
	);
}
