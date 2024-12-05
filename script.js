const navBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('.nav-list');

navBtn.addEventListener('click', ()=> {
    navList.classList.toggle('active');
})