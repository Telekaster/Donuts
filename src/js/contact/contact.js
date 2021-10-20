import sendContactForm from './sendContact';
import refs from '../refs';

const { contactMail, contactText, contactSendButton } = refs();
let mailValue = '';
let contactTextValue = '';

contactMail.addEventListener('input', (evt) => { return mailValue = evt.target.value });
contactText.addEventListener('input', (evt) => { return contactTextValue = evt.target.value });

contactSendButton.addEventListener('click', (() => {
    sendContactForm(mailValue, contactTextValue);
}));