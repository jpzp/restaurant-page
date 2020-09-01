import { pageLoad } from './pageLoad'
import { menuLoad } from './menuLoad'
import { contactLoad } from './contactLoad.js'


const content = document.querySelector('#content');
const home = document.querySelector('#home');
home.addEventListener('click', () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    pageLoad();
});
const menu = document.querySelector('#menu');
menu.addEventListener('click', () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    menuLoad();
});
const contact = document.querySelector('#contact');
contact.addEventListener('click', () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    contactLoad();

});
pageLoad();
console.log("Is this working?");
//left off on step 4
