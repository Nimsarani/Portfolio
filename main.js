window.onscroll = () => {
let header = document.querySelector('.header');

header.classList.toggle('sticky' , window.scrollY > 100);
};

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 50
});

ScrollReveal().reveal('.home-content,.heading ,.portfolio-box2', { origin: 'top' });
ScrollReveal().reveal('.services-container ,.about-content, .contact form ,.portfolio-box5', { origin: 'bottom' });
ScrollReveal().reveal('.portfolio-box1,.portfolio-box4', { origin: 'left' });
ScrollReveal().reveal('.portfolio-box3,.portfolio-box6', { origin: 'right' });
