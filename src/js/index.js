import openMobileMenu from "./mobile-menu_open";
import closeMobileMenu from './mobile-menu_closed';

const menuButton = document.querySelector('.header__menu_button');
const menu = document.querySelector('.menu');
const closeButton = document.querySelector('.menu__close_button');
const body = document.querySelector('#body')
const linkAbout = document.querySelector('#about_Link');
const linkProgram = document.querySelector('#program_Link');


openMobileMenu(menu, menuButton, body);
closeMobileMenu(menu, menuButton, closeButton, body, linkAbout);
closeMobileMenu(menu, menuButton, closeButton, body, linkProgram);