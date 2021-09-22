export default function closeMobileMenu(menu, openButton, closeButton, link) {
    closeButton.addEventListener('click', () => {
        openButton.classList.remove('menu__button_is-hidden');
        menu.classList.add('menu_is-hidden');
    });

    link.addEventListener('click', () => {
        menu.classList.add('menu_is-hidden');
        openButton.classList.remove('menu__button_is-hidden');
        
    })

}