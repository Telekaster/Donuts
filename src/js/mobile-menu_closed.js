export default function closeMobileMenu(menu, openButton, closeButton) {
    closeButton.addEventListener('click', () => {
        openButton.classList.remove('menu__button_is-hidden')
        menu.classList.add('menu_is-hidden')
    })
}