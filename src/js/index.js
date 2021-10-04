import openMobileMenu from "./mobile-menu_open";
import closeMobileMenu from './mobile-menu_closed';
import getReviewMarkupAcc from './reviews/getReviewMarkupAcc';
import getReviewMarkupDec from './reviews/getReviewMarkupDec';
import sendRegistration from './sendRegistration';



// Registration form_______________________________________________

const name = document.querySelector('#name');
name.addEventListener('input', () => {
});

const phone = document.querySelector('#tel');
phone.addEventListener('input', () => {
});

const mail = document.querySelector('#mail');

mail.addEventListener('input', () => {
});

const registerButton = document.querySelector('.registration__form_button');

registerButton.addEventListener('click', () => {
    sendRegistration(name, phone, mail);
});



// Mobile menu_______________________________________________________

const menuButton = document.querySelector('.header__menu_button');

const menu = document.querySelector('.menu');

const closeButton = document.querySelector('.menu__close_button');

const body = document.querySelector('#body')

const linkAbout = document.querySelector('#about_Link');

const linkProgram = document.querySelector('#program_Link');

const linkReviews = document.querySelector('#reviews_link');

const linkContacts = document.querySelector('#contacts_link');

const nextButton = document.querySelector('#button-next');

const previousButton = document.querySelector('#button-previous');

const insertArea = document.querySelector('#user_area');

const page = document.querySelector('#page');

const last_page = document.querySelector('#last_page');



closeButton.addEventListener('click', () => {
    closeMobileMenu(menu, menuButton, body)
});
    
linkAbout.addEventListener('click', () => {
    closeMobileMenu(menu, menuButton, body)
});

linkProgram.addEventListener('click', () => {
    closeMobileMenu(menu, menuButton, body)
});

linkReviews.addEventListener('click', () => {
    closeMobileMenu(menu, menuButton, body)
});

linkContacts.addEventListener('click', () => {
    closeMobileMenu(menu, menuButton, body)
});


openMobileMenu(menu, menuButton, body);


// Reviews area__________________________________________

nextButton.addEventListener('click', () => {

    getReviewMarkupAcc(page, last_page, nextButton, insertArea);

});

previousButton.addEventListener('click', () => {
    
    getReviewMarkupDec(page, previousButton, insertArea, nextButton);

});








