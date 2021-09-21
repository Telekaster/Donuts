export default function openMobileMenu() {
    const menuButton = document.querySelector('.header__menu_button')
    const menu = document.querySelector('.menu');
    

    menuButton.addEventListener('click', (evt) => {
        menu.classList.replace('menu_is-hidden','menu_is-open')
        menuButton.classList.add('menu__button_is-hidden')
    })
};