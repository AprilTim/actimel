document.addEventListener('DOMContentLoaded', function() {
	setTimeout(function(){
		document.querySelector('body').style.overflow = 'unset';
		document.querySelector('.canvas-overlay').style.display = 'block';
		window.scrollTo(0, 0);
	}, 100);
	var body = document.querySelector('body');
	var bg = document.querySelector('.bg');
	/*var header = document.querySelector('.header');*/
	var colors = [
		[255, 211, 211],
		[255, 243, 211],
		[231, 255, 211],
		[211, 245, 255],
		[225, 215, 255],
		[255, 215, 239],
		[255, 236, 218]
	];

	var ctrl = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onEnter',
			offset: document.documentElement.clientHeight
		}
	});

	var bgColorScene = new ScrollMagic.Scene({
			triggerElement: '.scroll-container',
			duration: document.querySelector('.scroll-container').offsetHeight || 0,
		})
		.on("progress", function(e) {
			var progress = e.progress.toFixed(2) * 100;
			for (var i = 0; i < colors.length - 1; i++) {
				if (progress <= (100 / colors.length * (i + 1)) && progress > 100 / colors.length * i) {
					var difR = Math.round((colors[i + 1][0] - colors[i][0]) / 100 * ((progress - 100 / colors.length * i) * colors.length));
					var difG = Math.round((colors[i + 1][1] - colors[i][1]) / 100 * ((progress - 100 / colors.length * i) * colors.length));
					var difB = Math.round((colors[i + 1][2] - colors[i][2]) / 100 * ((progress - 100 / colors.length * i) * colors.length));
					var r = colors[i][0] + difR;
					var g = colors[i][1] + difG;
					var b = colors[i][2] + difB;
					bg.style.background = 'radial-gradient(44.79% 71.67% at 50% 50%, rgb(255,255,255) 0%, rgb(' + r + ',' + g + ',' + b + ') 100%)';
					/*header.style.background = 'linear-gradient(180deg, rgb(' + r + ',' + g + ',' + b + ') 49.91%, rgba(255, 255, 255, 0))'*/
				}
			}
		})
		.addTo(ctrl);

	var canvasScene = new ScrollMagic.Scene({
		triggerElement: '.main',
		duration: document.querySelector('.main').offsetHeight,
	})
	.on('enter', function(e){
		window.scrollTo({
			top: document.querySelector('.main').offsetTop,
		})
		document.querySelector('body').style.overflow = 'hidden';
		document.querySelector('.canvas-overlay').style.display = 'none';
	}).addTo(ctrl);
});

