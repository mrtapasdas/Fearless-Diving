/* SECURITY: Disable Right Click, F12, Ctrl+U, Zoom */
document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function(e) {
    if (e.keyCode == 123) return false; 
    if (e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'C'.charCodeAt(0) || e.keyCode == 'J'.charCodeAt(0))) return false; 
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false; 
}

// Disable Zoom
document.addEventListener('wheel', function(e) {
    if (e.ctrlKey) e.preventDefault();
}, { passive: false });

/* UI LOGIC */

// Mobile Menu
function toggleMenu() {
    const nav = document.getElementById('mobile-nav');
    nav.classList.toggle('hidden');
}

// WhatsApp Booking
function bookNow(serviceName, price) {
    const phone = "919876543210"; 
    const text = `Hi FearLess Diving, interested in: ${serviceName} (${price}). Details please?`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
}

// Simulated "Auto Fetch" Google Reviews (No AJAX/API Key required)
// This creates an infinite scrolling effect for reviews
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('reviews-container');
    if(container) {
        // Auto-scroll logic
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
            container.scrollLeft += 1;
            scrollAmount += 1;
            // Reset if reached end (infinite loop illusion)
            if(scrollAmount >= (container.scrollWidth - container.clientWidth)) {
                container.scrollLeft = 0;
                scrollAmount = 0;
            }
        }, 30); // Speed of scroll

        // Pause on hover
        container.addEventListener('mouseover', () => clearInterval(slideTimer));
    }
});
