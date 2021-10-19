export default function refs() {
    const selectors = {
        menuButton: document.querySelector('.header__menu_button'),
        menu: document.querySelector('.menu'),
        closeButton: document.querySelector('.menu__close_button'),
        body: document.querySelector('#body'),
        linkAbout: document.querySelector('#about_Link'),
        linkProgram: document.querySelector('#program_Link'),
        linkReviews: document.querySelector('#reviews_link'),
        linkContacts: document.querySelector('#contacts_link'),
        nextButton: document.querySelector('#button-next'),
        previousButton: document.querySelector('#button-previous'),
        insertArea: document.querySelector('#user_area'),
        page: document.querySelector('#page'),
        last_page: document.querySelector('#last_page'),
        name: document.querySelector('#name'),
        phone: document.querySelector('#tel'),
        mail: document.querySelector('#mail'),
        registerButton: document.querySelector('.registration__form_button'),
    };

    return selectors;
};