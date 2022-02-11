window.addEventListener('DOMContentLoaded', () => {
	const video = document.querySelector('.video-file');

	video.onmouseover = function () {
		video.play();
	};
	video.onmouseout = function () {
		video.pause();
	};
});
