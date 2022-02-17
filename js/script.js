let cursor = document.querySelector('.cursor');
// let elem = document.getElementsByTagName("div");
// let cursorActive = document.querySelector('.cursor__active');
// let contains = elem.classList.contains(cursorActive);

function addCursor() {

}

document.addEventListener ('mousemove', (e) => {
   	cursor.style.left = e.clientX + 'px';
		cursor.style.top = e.clientY + 'px';
});