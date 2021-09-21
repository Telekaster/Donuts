export default function closeMobileMenu() {

    const menuButton = document.querySelector('.header__menu_button')
    const menu = document.querySelector('.menu');
    const closeButton = document.querySelector('.menu__close_button')

    closeButton.addEventListener('click', () => {
        console.log(closeButton);
        menuButton.classList.remove('menu__button_is-hidden')
        menu.classList.replace('menu_is-open','menu_is-hidden')
    })


    
}