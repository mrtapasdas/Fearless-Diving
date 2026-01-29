/* script.js */

// 1. SECURITY: Disable Right Click, Selection, and Zoom
document.addEventListener('contextmenu', (e) => e.preventDefault());

document.addEventListener('keydown', (e) => {
    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (
        e.keyCode === 123 || 
        (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || 
        (e.ctrlKey && e.keyCode === 85)
    ) {
        e.preventDefault();
        return false;
    }
});

// Disable Zoom (Ctrl + / Ctrl -)
document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey || event.metaKey) && (event.key === '+' || event.key === '-' || event.key === '=')) {
        event.preventDefault();
    }
});

document.addEventListener('wheel', function(event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
}, { passive: false });


// 2. MOBILE MENU TOGGLE
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if(menuBtn){
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// 3. WHATSAPP BOOKING FUNCTION
function bookNow(serviceName) {
    const phoneNumber = "919999999999"; // Replace with real number
    const text = `Hello FearLess Diving, I am interested in booking the *${serviceName}*. Please provide more details.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}

// 4. REVIEW SLIDER (Simple Auto-Scroll)
const slider = document.getElementById('review-slider');
if (slider) {
    let scrollAmount = 0;
    const scrollStep = 1;
    const delay = 20;

    function autoScroll() {
        if (slider.scrollWidth - slider.clientWidth <= slider.scrollLeft + 1) {
            slider.scrollLeft = 0; // Reset to start
        } else {
            slider.scrollLeft += scrollStep;
        }
    }
    setInterval(autoScroll, delay);
}

// 5. FAQ TOGGLE
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(q => {
    q.addEventListener('click', () => {
        const answer = q.nextElementSibling;
        const icon = q.querySelector('i');
        
        if (answer.classList.contains('hidden')) {
            answer.classList.remove('hidden');
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        } else {
            answer.classList.add('hidden');
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        }
    });
});
