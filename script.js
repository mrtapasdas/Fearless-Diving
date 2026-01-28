/* --- SECURITY FEATURES --- */

// Disable Right Click
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// Disable Key Combinations (Ctrl+U, Ctrl+S, Ctrl+C, F12)
document.addEventListener('keydown', (e) => {
    if (
        (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'c' || e.key === 'p')) ||
        e.key === 'F12'
    ) {
        e.preventDefault();
    }
});

// Disable Zoom (Ctrl + Wheel)
document.addEventListener('wheel', (e) => {
    if (e.ctrlKey) {
        e.preventDefault();
    }
}, { passive: false });

// Disable Zoom (Pinch on Touch)
document.addEventListener('touchmove', (e) => {
    if (e.scale !== 1) {
        e.preventDefault();
    }
}, { passive: false });


/* --- UI/UX LOGIC --- */

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if(menuBtn){
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// WhatsApp Booking Logic
function bookNow(serviceName) {
    const phoneNumber = "919876543210"; // Replace with real number
    const message = `Hello FearLess Diving, I am interested in booking the *${serviceName}*. Please provide more details.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// FAQ Accordion Logic
const accordions = document.querySelectorAll('.accordion-header');

accordions.forEach(acc => {
    acc.addEventListener('click', () => {
        const content = acc.nextElementSibling;
        const icon = acc.querySelector('i');
        
        // Close others
        accordions.forEach(otherAcc => {
            if(otherAcc !== acc) {
                otherAcc.nextElementSibling.classList.add('hidden');
                otherAcc.querySelector('i').classList.replace('fa-minus', 'fa-plus');
            }
        });

        // Toggle current
        content.classList.toggle('hidden');
        if(content.classList.contains('hidden')){
            icon.classList.replace('fa-minus', 'fa-plus');
        } else {
            icon.classList.replace('fa-plus', 'fa-minus');
        }
    });
});
