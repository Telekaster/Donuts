import refs from '../refs';
import closeMobileMenu from './mobile-menu_closed';
import openMobileMenu from './mobile-menu_open';

const { menuButton, menu, closeButton, body, linkAbout, linkProgram, linkReviews, linkContacts } = refs();

closeButton.addEventListener('click', () => {
    closeMobileMenu(menu, menuButton, body)
});
    
linkAbout.addEventListener('click', () => {
    closeMobileMenu(menu, menuButton, body)
});

linkProgram.addEventListener('click', () => {
    closeMobileMenu(menu, menuButton, body)
});

linkReviews.addEventListener('click', () => {
    closeMobileMenu(menu, menuButton, body)
});

linkContacts.addEventListener('click', () => {
    closeMobileMenu(menu, menuButton, body)
});

openMobileMenu(menu, menuButton, body);