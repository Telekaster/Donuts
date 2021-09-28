export default function getReviewMarkup(id, reviews__area) {

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
                ${data.name.toUpperCase()} enjoy DONUTS
            </p>`;

            // return reviews__area.insertAdjacentHTML('afterbegin', markup);

        }).catch((error) => {
            console.log(error);
        })
 
}