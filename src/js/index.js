import openMobileMenu from "./mobile-menu_open";
import closeMobileMenu from './mobile-menu_closed';

const menuButton = document.querySelector('.header__menu_button');
const menu = document.querySelector('.menu');
const closeButton = document.querySelector('.menu__close_button');
const link = document.querySelector('.menu__link');

openMobileMenu(menu, menuButton);
closeMobileMenu(menu, menuButton, closeButton, link);