'use strict';
import Swiper from '../libs/swiper-bundle.min.js';

const navbar_toggler = document.querySelector('.navbar_toggler');
const navbar_menu = document.querySelector('.navbar_menu');
const navbar_menu_links = document.querySelectorAll('.navbar_menu li a');

navbar_toggler.addEventListener('click', () => {
	navbar_toggler.classList.toggle('active');
	navbar_menu.classList.toggle('mobile');
});

navbar_menu_links.forEach(link => {
	link.addEventListener('click', () => {
		navbar_toggler.classList.toggle('active');
		navbar_menu.classList.toggle('mobile');
	});
});

// swiper
const swiperHome = new Swiper('.home_swiper', {
	loop: true,
	speed: 800,
	parallax: true,
	effect: 'fade',

	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',

		formatFractionCurrent: n => {
			return '0' + n;
		},
		formatFractionTotal: n => {
			return '0' + n;
		},
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
