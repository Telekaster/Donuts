export default function getReviewMarkupAcc(page, last_page, nextButton, insertArea) {

    const id = Number(page.textContent);
    

    if (id === Number(last_page.textContent)) {
    
        return;

    } else {
           
        insertArea.innerHTML = '';

        let markup = '';
        
        const url = 'https://pokeapi.co/api/v2/pokemon/'
        fetch(`${url}${id}`)
            .then((response) => {
            
                return response.json();
            
            }).then((data) => {
            
                markup = `
                <img class="reviews__photo" src="${data.sprites.back_default}" alt="${data.name}">
            
                <p class="reviews__name">${data.name.toUpperCase()}</p>
                <p class="reviews__text">
                    ${data.name.toUpperCase()} enjoy DONUTS
                </p>`;
            
                return insertArea.insertAdjacentHTML('afterbegin', markup);
            
            }).catch((error) => {
                console.log(error);
            })
        
        page.textContent = id + 1;
            
    };
  
};


