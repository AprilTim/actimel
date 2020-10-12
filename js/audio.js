const auido = document.querySelector(".js-audio");
const audioControl = document.querySelector(".js-audio-control");
const main = document.querySelector(".main");
let loaded = false;
let played = false;

const audioLoaded = () => {
  auido.volume = 0.6;

  auido.addEventListener("canplaythrough", () => {
    loaded = true;
  });

  audioControl.addEventListener("click", () => {
    if(!loaded) return false;
    if (audioControl.classList.contains("paused")) {
			audioControl.classList.remove("paused");
			auido.pause();
    } else {
			audioControl.classList.add("paused");
			auido.play();
    }
  });
  auido.load()
}
main.addEventListener("click", () => {
	if (loaded && !played) {
		audioControl.classList.add("paused");
		auido.play();
		played = true;
	}
});

document.addEventListener("DOMContentLoaded", audioLoaded)