
import menuList from './menu.json'
import './sass/main.scss';
import cardTpl from './partials/card.hbs'

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function createCardMarkup(menuList) {
    return menuList.map(cardTpl).join('');
}

const cardsMenu = document.querySelector('.js-menu')
const cardsMarkup = createCardMarkup(menuList);
cardsMenu.insertAdjacentHTML('beforeend', cardsMarkup)


// console.log(createCardMarkup(menuList))
// console.log(cardsMenu)
const body = document.querySelector("body")
const themeSwitch = document.querySelector(".theme-switch__toggle")
const themeInLocalStorage = localStorage.getItem('theme')
themeSwitch.addEventListener('click', setTheme)
themeSwitch.addEventListener('click', setLocalStorage)


function setTheme(e) {
    if (e.target.checked === true) {
        body.classList.remove(Theme.LIGHT);
        body.classList.add(Theme.DARK);
    } else {
        body.classList.remove(Theme.DARK);
        body.classList.add(Theme.LIGHT)
    }
}

function setLocalStorage(e) {
    if (e.target.checked === true) {
        localStorage.setItem('theme', Theme.DARK);
    } else {
        localStorage.removeItem('theme');
        localStorage.setItem('theme', Theme.LIGHT);
    }
}

if (themeInLocalStorage === 'light-theme') {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    themeSwitch.checked = false;
} else if (themeInLocalStorage === 'dark-theme') {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    themeSwitch.checked = true;
}
