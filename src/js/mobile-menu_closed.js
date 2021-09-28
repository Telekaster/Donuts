export default function closeMobileMenu(menu, openButton, body) {
    
    openButton.classList.remove('menu__button_is-hidden');
    
    menu.classList.add('menu_is-hidden');
    
    body.classList.remove('static')
    
};

