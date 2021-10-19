import refs from '../refs';
import sendRegistration from './sendRegistration';

const { name, phone, mail, registerButton } = refs();

let nameValue = '';
let phoneValue = '';
let mailValue = '';

name.addEventListener('input', ((event) => { return nameValue = event.target.value }));
phone.addEventListener('input', ((event) => {return phoneValue = event.target.value}));
mail.addEventListener('input', ((event) => {return mailValue = event.target.value}));

registerButton.addEventListener('click', () => {
    sendRegistration(nameValue, phoneValue, mailValue);
});