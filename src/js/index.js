import openMobileMenu from "./mobile-menu_open";
import closeMobileMenu from './mobile-menu_closed';

const menuButton = document.querySelector('.header__menu_button');
const menu = document.querySelector('.menu');
const closeButton = document.querySelector('.menu__close_button');
const linkAbout = document.querySelector('#about_Link');
const linkProgram = document.querySelector('#program_Link');


openMobileMenu(menu, menuButton);
closeMobileMenu(menu, menuButton, closeButton, linkAbout);
closeMobileMenu(menu, menuButton, closeButton, linkProgram);