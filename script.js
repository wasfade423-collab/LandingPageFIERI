document.addEventListener('DOMContentLoaded', () => {
    // 1. Menu Burger Logic
    const burgerBtn = document.getElementById('burger-btn');
    const closeMenu = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    const toggleMenu = () => mobileMenu.classList.toggle('open');

    burgerBtn.addEventListener('click', toggleMenu);
    closeMenu.addEventListener('click', toggleMenu);

    // Fermer le menu au clic sur un lien mobile
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    });

    // 2. Carousel Logic
    const slides = document.querySelectorAll('.carousel-item');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, 3500); // Change toutes les 3.5 secondes
});

window.addEventListener('scroll', () => {
    const stickyCta = document.getElementById('sticky-cta');
    const heroSection = document.querySelector('header'); // Cible votre section Hero
    
    // On calcule la hauteur du Hero
    const heroHeight = heroSection.offsetHeight;

    if (window.scrollY > heroHeight) {
        // Si on a dépassé le Hero : on affiche le bouton
        stickyCta.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
        stickyCta.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
    } else {
        // Si on est dans le Hero : on cache le bouton
        stickyCta.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
        stickyCta.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
    }
});