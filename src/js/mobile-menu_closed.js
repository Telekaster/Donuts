export default function closeMobileMenu(menu, openButton, closeButton, body, link) {
    closeButton.addEventListener('click', () => {
        openButton.classList.remove('menu__button_is-hidden');
        menu.classList.add('menu_is-hidden');
        body.classList.remove('static')
    });

    link.addEventListener('click', () => {
        menu.classList.add('menu_is-hidden');
        openButton.classList.remove('menu__button_is-hidden');
        body.classList.remove('static')
    })

}