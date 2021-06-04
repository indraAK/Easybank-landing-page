const menu = document.getElementById('menu');
const mobileNav = document.querySelector('.mobile-nav');
const header = document.querySelector('.header');

function toggleMenu() {
   menu.classList.toggle('active');

   if (menu.classList.contains('active')) {
      showMobileNav();
   } else {
      closeMobileNav();
   }
}

function showMobileNav() {
   mobileNav.classList.add('open');
}

function closeMobileNav() {
   mobileNav.classList.remove('open');
}

function toggleFixedHeader() {
   const headerHeight = header.clientHeight;
   const { scrollY } = window;

   (scrollY > headerHeight) ? header.classList.add('fixed') : header.classList.remove('fixed');
}

menu.addEventListener('click', toggleMenu);
window.addEventListener('scroll', toggleFixedHeader);