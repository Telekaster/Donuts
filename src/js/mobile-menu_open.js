export default function openMobileMenu(menu, openButton) {
    openButton.addEventListener('click', () => {
        menu.classList.replace('menu_is-hidden','menu_is-open')
        openButton.classList.add('menu__button_is-hidden')
    })
};