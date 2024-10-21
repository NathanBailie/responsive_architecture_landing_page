'use strict';

const navbar_toggler = document.querySelector('.navbar_toggler');
const navbar_menu = document.querySelector('.navbar_menu');
const navbar_menu_links = document.querySelectorAll('.navbar_menu li');

navbar_toggler.addEventListener('click', () => {
	navbar_toggler.classList.toggle('active');
	navbar_menu.classList.toggle('mobile');
});

navbar_menu_links.forEach(li => {
	li.addEventListener('click', () => {
		navbar_toggler.classList.toggle('active');
		navbar_menu.classList.toggle('mobile');
	});
});
