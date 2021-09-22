export default function openMobileMenu(menu, openButton) {
    openButton.addEventListener('click', () => {
        menu.classList.remove('menu_is-hidden')
        openButton.classList.add('menu__button_is-hidden')
    })
};