// script.js

// 1. Security & Restrictions
document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function(e) {
    if (e.keyCode == 123) return false; // F12
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false; // Ctrl+Shift+I
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) return false; // Ctrl+Shift+C
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false; // Ctrl+Shift+J
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false; // Ctrl+U
}

// Disable Zoom via Wheel
document.addEventListener('wheel', function(e) {
    if (e.ctrlKey) {
        e.preventDefault();
    }
}, { passive: false });

// 2. Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if(menuBtn){
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// 3. Dynamic WhatsApp Booking
function bookNow(serviceName) {
    const phone = "919876543210"; // Replace with real number
    const message = `Hello FearLess Diving, I am interested in booking: ${serviceName}. Please provide details.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// 4. Review Slider (Auto Moving)
let currentSlide = 0;
const slides = document.querySelectorAll('.review-slide');

function showSlides() {
    if(slides.length === 0) return;
    
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
    });
    
    currentSlide++;
    if (currentSlide > slides.length) { currentSlide = 1 }
    
    slides[currentSlide - 1].style.display = 'block';
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

document.addEventListener('DOMContentLoaded', showSlides);

// 5. Accordion for FAQ
const accordions = document.querySelectorAll('.accordion-btn');
accordions.forEach(acc => {
    acc.addEventListener('click', function() {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.classList.add('hidden');
        } else {
            panel.classList.remove('hidden');
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});
