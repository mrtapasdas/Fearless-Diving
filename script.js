// Security Measures
document.addEventListener('contextmenu', (e) => e.preventDefault());

document.addEventListener('keydown', (e) => {
    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || (e.ctrlKey && e.keyCode === 85)) {
        e.preventDefault();
    }
    // Disable Zoom (Ctrl + / Ctrl -)
    if (e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '=')) {
        e.preventDefault();
    }
});

// Disable Wheel Zoom
document.addEventListener('wheel', (e) => {
    if (e.ctrlKey) {
        e.preventDefault();
    }
}, { passive: false });


// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if(menuBtn){
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Auto Scroll Reviews (Index Page)
const slider = document.getElementById('review-slider');
if(slider) {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
        slider.scrollLeft += 1;
        scrollAmount += 1;
        // Reset if reached end (approximate check)
        if(scrollAmount >= (slider.scrollWidth - slider.clientWidth)) {
            slider.scrollLeft = 0;
            scrollAmount = 0;
        }
    }, 20); // Speed
}

// FAQ Accordion
const accordions = document.querySelectorAll('.accordion-header');
accordions.forEach(acc => {
    acc.addEventListener('click', () => {
        const body = acc.nextElementSibling;
        body.classList.toggle('hidden');
        const icon = acc.querySelector('i');
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up');
    });
});
