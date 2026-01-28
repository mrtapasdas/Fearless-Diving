/* script.js */

// 1. SECURITY: Disable Right Click, Selection, F12, Ctrl+U
document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener('keydown', function(e) {
    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (e.keyCode === 123 || 
       (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || 
       (e.ctrlKey && e.keyCode === 85)) {
        e.preventDefault();
        return false;
    }
});

// Disable Zoom (Best effort for mobile)
document.addEventListener('touchmove', function(event) {
    if (event.scale !== 1) { 
        event.preventDefault(); 
    }
}, { passive: false });

// 2. UI LOGIC

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if(menuBtn){
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// 3. WHATSAPP BOOKING LOGIC
function bookNow(serviceName) {
    const phone = "919876543210"; // Replace with real number
    const message = encodeURIComponent(`Hello FearLess Diving, I am interested in booking: ${serviceName}. Please provide more details.`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}

// 4. SERVICES PAGE SLIDER LOGIC
// Looks for containers with class 'service-card-slider'
document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.service-card-slider');
    
    sliders.forEach(slider => {
        const images = slider.querySelectorAll('.slide-image');
        const nextBtn = slider.querySelector('.next-btn');
        const prevBtn = slider.querySelector('.prev-btn');
        let currentIndex = 0;

        if(images.length > 0){
            // Show first image
            images[0].classList.add('active');

            if(nextBtn && prevBtn) {
                nextBtn.addEventListener('click', (e) => {
                    e.preventDefault(); // Prevent scroll jump
                    images[currentIndex].classList.remove('active');
                    currentIndex = (currentIndex + 1) % images.length;
                    images[currentIndex].classList.add('active');
                });

                prevBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    images[currentIndex].classList.remove('active');
                    currentIndex = (currentIndex - 1 + images.length) % images.length;
                    images[currentIndex].classList.add('active');
                });
            }
        }
    });
});
