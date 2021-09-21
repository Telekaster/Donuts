export default function appearMobileMenu() {
    const menuButton = document.querySelector('.header__menu_button')
    const menu = document.querySelector('.menu');

    menuButton.addEventListener('click', (evt) => {
        menu.classList.remove('is-closed')
    })

    console.log(menuButton);
    console.log(menu);

}