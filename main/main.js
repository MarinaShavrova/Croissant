const OPEN_BTN = document.querySelector('.open-btn');
const CLOSE_BTN = document.querySelector('.close-btn');
const NAV = document.querySelectorAll('.nav');

OPEN_BTN.addEventListener('click', ()=>{
    NAV.forEach(nav_el => nav_el.classList.add('visible'))
})

CLOSE_BTN.addEventListener('click', ()=>{
    NAV.forEach(nav_el => nav_el.classList.remove('visible'))
})