import openMobileMenu from "./mobile-menu_open";
import closeMobileMenu from './mobile-menu_closed';
import getReviewMarkupAcc from './reviews/getReviewMarkupAcc';
import getReviewMarkupDec from './reviews/getReviewMarkupDec';


const menuButton = document.querySelector('.header__menu_button');

const menu = document.querySelector('.menu');

const closeButton = document.querySelector('.menu__close_button');

const body = document.querySelector('#body')

const linkAbout = document.querySelector('#about_Link');

const linkProgram = document.querySelector('#program_Link');

const nextButton = document.querySelector('#button-next');

const previousButton = document.querySelector('#button-previous');

const insertArea = document.querySelector('#user_area');

const page = document.querySelector('#page');

const last_page = document.querySelector('#last_page');



nextButton.addEventListener('click', () => {

    getReviewMarkupAcc(page, last_page, nextButton, insertArea);

});

previousButton.addEventListener('click', () => {
    
    getReviewMarkupDec(page, previousButton, insertArea, nextButton);

});



// openMobileMenu(menu, menuButton, body);
// closeMobileMenu(menu, menuButton, closeButton, body, linkAbout);
// closeMobileMenu(menu, menuButton, closeButton, body, linkProgram);




