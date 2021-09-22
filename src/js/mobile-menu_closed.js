export default function closeMobileMenu(menu, openButton, closeButton) {
    closeButton.addEventListener('click', () => {
        openButton.classList.remove('menu__button_is-hidden')
        menu.classList.replace('menu_is-open','menu_is-hidden')
    })
}