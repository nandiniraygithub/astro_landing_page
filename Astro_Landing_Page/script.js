const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav_links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
