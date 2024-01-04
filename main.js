const nav = document.querySelector('nav');
const mobileNav = document.querySelector('nav.mobile-nav');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.mobile-menu-container .close-icon');
const mobileMenuContainer = document.querySelector('.mobile-menu-container');

function scrolled () {
    if (window.scrollY > 70) {
        nav.classList.add('scrolled');
        mobileNav.classList.add('scrolled')
    } else {
        nav.classList.remove('scrolled')
        mobileNav.classList.remove('scrolled')
    }
};

window.addEventListener('scroll', scrolled);

menuIcon.addEventListener('click', () => {
    mobileMenuContainer.classList.add("active");
    console.log('clicked');
});

closeIcon.addEventListener('click', () => {
    mobileMenuContainer.classList.remove("active");
});