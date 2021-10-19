import getReviewMarkupAcc from './getReviewMarkupAcc';
import getReviewMarkupDec from './getReviewMarkupDec';
import refs from '../refs';
const { nextButton, previousButton, insertArea, page, last_page } = refs();

nextButton.addEventListener('click', () => {
    getReviewMarkupAcc(page, last_page, nextButton, insertArea);
});

previousButton.addEventListener('click', () => {  
    getReviewMarkupDec(page, previousButton, insertArea, nextButton);
});