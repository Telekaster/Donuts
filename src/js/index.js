import './menu/menu';
import './reviews/review';
import './registration/registration';
import sendContactForm from './sendContact';


// Contact form_______________________________________________

const contactMail = document.querySelector('#mailContacts');
contactMail.addEventListener('input', () => { });

const contactText = document.querySelector('#question');
contactText.addEventListener('input', () => { });

const contactSendButton = document.querySelector('#contact-button');
contactSendButton.addEventListener('click', (() => {
    sendContactForm(contactMail, contactText);
}));








