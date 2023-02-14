'use strict';

const cursor = document.querySelector('.cursor'),
	cursorOff = document.querySelector('.cursor__off');

document.addEventListener('mousemove', (e) => {
	cursor.style.left = e.clientX + 'px';
	cursor.style.top = e.clientY + 'px';
});

const cursorRem = cursorOff.addEventListener('mouseover', (e) => {
	cursor.style.display = 'none';
});

const cursorAdd = cursorOff.addEventListener('mouseout', (e) => {
	cursor.style.display = 'block';
});

