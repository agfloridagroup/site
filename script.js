// Mobile menu
const toggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

toggle.addEventListener('click', () => navLinks.classList.toggle('active'));
document.querySelectorAll('.nav-links a').forEach(link =>
    link.addEventListener('click', () => navLinks.classList.remove('active'))
);

// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () =>
    navbar.classList.toggle('scrolled', window.scrollY > 80)
);

// Parallax hero background
const heroBg = document.querySelector('.hero-bg');
window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight) {
        heroBg.style.transform = `scale(1.1) translateY(${y * 0.15}px)`;
    }
});

// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('[data-animate]').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 100}ms`;
    observer.observe(el);
});

// SMS consent form
function handleSmsConsent(e) {
    e.preventDefault();
    const form = document.getElementById('sms-consent-form');
    const success = document.getElementById('sms-success');
    form.style.display = 'none';
    success.style.display = 'block';
}
