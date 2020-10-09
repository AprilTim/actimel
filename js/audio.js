		const auido = document.querySelector(".js-audio");
		const audioControl = document.querySelector(".js-audio-control");
		let loaded = false;
		auido.volume = 0.6;

		auido.addEventListener("canplay", () => {
			loaded = true;
		});

		audioControl.addEventListener("click", () => {
			/*if(!loaded) return false;*/
			if(audioControl.classList.contains("paused")){
				audioControl.classList.remove("paused");
				console.log("pause")
				auido.play();
			}else {
				audioControl.classList.add("paused");
				console.log("play")
				auido.pause();
			}
		});