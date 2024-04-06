import './style.css'
import logo from './images/F_B1.png'
import { createMenu } from './menu.js'
import { createHome } from './home.js'
import { createAbout } from './about.js'

const header = document.querySelector('header');
const restLogo = header.querySelector('img');
restLogo.src = logo;

const content = document.querySelector('#content');

const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const aboutBtn = document.querySelector('#about-btn');

homeBtn.addEventListener('click', () => {
    homeBtn.style.background = 'rgba(256,256,256,0.1)';
    menuBtn.style.background = 'none';
    aboutBtn.style.background = 'none';
    content.classList.remove('menu');
    content.classList.remove('about');
    content.innerHTML = '';
    createHome();
})

menuBtn.addEventListener('click', () => {
    menuBtn.style.background = 'rgba(256,256,256,0.1)';
    homeBtn.style.background = 'none';
    aboutBtn.style.background = 'none';
    content.classList.remove('home');
    content.classList.remove('about');
    content.innerHTML = '';
    createMenu();
})


aboutBtn.addEventListener('click', () => {
    aboutBtn.style.background = 'rgba(256,256,256,0.1)';
    homeBtn.style.background = 'none';
    menuBtn.style.background = 'none';
    content.classList.remove('menu');
    content.classList.remove('home');
    content.innerHTML = '';
    createAbout();
})

homeBtn.style.background = 'rgba(256,256,256,0.1)';
createHome();
