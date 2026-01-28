/* SECURITY: Disable Right Click, F12, Ctrl+U, Zoom */
document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function(e) {
    if (e.keyCode == 123) return false; // F12
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false; // Ctrl+Shift+I
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) return false; // Ctrl+Shift+C
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false; // Ctrl+Shift+J
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false; // Ctrl+U
}

// Disable Zoom (Wheel)
document.addEventListener('wheel', function(e) {
    if (e.ctrlKey) {
        e.preventDefault();
    }
}, { passive: false });

/* UI LOGIC */

// Mobile Menu Toggle
function toggleMenu() {
    const nav = document.getElementById('mobile-nav');
    nav.classList.toggle('hidden');
}

// WhatsApp Booking Logic
function bookNow(serviceName, price) {
    const phone = "919876543210"; 
    const text = `Hello FearLess Diving, I am interested in booking: ${serviceName} (${price}). Please provide more details.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}
