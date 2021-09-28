import openMobileMenu from "./mobile-menu_open";
import closeMobileMenu from './mobile-menu_closed';
import getReviewMarkup from './reviews';


const menuButton = document.querySelector('.header__menu_button');

const menu = document.querySelector('.menu');

const closeButton = document.querySelector('.menu__close_button');

const body = document.querySelector('#body')

const linkAbout = document.querySelector('#about_Link');

const linkProgram = document.querySelector('#program_Link');

const nextButton = document.querySelector('#button-next');

const insertArea = document.querySelector('#user_area');
console.log(insertArea);

nextButton.addEventListener('click',getReviewMarkup(1, insertArea))











openMobileMenu(menu, menuButton, body);
closeMobileMenu(menu, menuButton, closeButton, body, linkAbout);
closeMobileMenu(menu, menuButton, closeButton, body, linkProgram);
