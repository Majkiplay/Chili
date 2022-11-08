
const burgerBtn=document.querySelector('.nav__burger-icon')
const nav = document.querySelector('.nav');
const navMobile=document.querySelector('.nav__items-mobile')
const allNavItems=document.querySelectorAll('a')
const handleNav = () => {
    navMobile.classList.toggle('nav--active');


    allNavItems.forEach((item) => {
        item.addEventListener('click', () => {
            navMobile.classList.remove('nav--active');
        });
    });

};






burgerBtn.addEventListener('click', handleNav);