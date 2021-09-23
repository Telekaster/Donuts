import openMobileMenu from "./mobile-menu_open";
import closeMobileMenu from './mobile-menu_closed';


const menuButton = document.querySelector('.header__menu_button');

const menu = document.querySelector('.menu');

const closeButton = document.querySelector('.menu__close_button');

const body = document.querySelector('#body')

const linkAbout = document.querySelector('#about_Link');

const linkProgram = document.querySelector('#program_Link');

const reviewsArea = document.querySelector('.reviews__area');



getReviewMarkup(1)

function getReviewMarkup(id) {

    let markup = '';
    const url = 'https://pokeapi.co/api/v2/pokemon/'

    fetch(`${url}${id}`)
        .then((response) => {
        
            return response.json();

        }).then((data) => {

            console.log(data);

            markup = `
            <img class="reviews__photo" src="${data.sprites.back_default}" alt="${data.name}">

            <svg class="reviews__rate" width=136 height=24>
                <use href="./images/sprite.svg/#icon-stars"></use>
            </svg>

            <p class="reviews__name">${data.name.toUpperCase()}</p>
            <p class="reviews__text">
                Bulbasaur enjoy DONUTS
            </p>`;
            // console.log(markup);
            return reviewsArea.insertAdjacentHTML('afterbegin', markup);

        }).catch((error) => {
            console.log(error);
        })
 
}





openMobileMenu(menu, menuButton, body);
closeMobileMenu(menu, menuButton, closeButton, body, linkAbout);
closeMobileMenu(menu, menuButton, closeButton, body, linkProgram);