/* SECURITY: Disable Right Click, keys, Zoom */
document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function(e) {
    if (e.keyCode == 123) return false; 
    if (e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'C'.charCodeAt(0) || e.keyCode == 'J'.charCodeAt(0))) return false;
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false; 
}

document.addEventListener('wheel', function(e) {
    if (e.ctrlKey) e.preventDefault();
}, { passive: false });

/* UI LOGIC */
function toggleMenu() {
    const nav = document.getElementById('mobile-nav');
    nav.classList.toggle('hidden');
}

function bookNow(serviceName, price) {
    const phone = "919876543210"; 
    const text = `Hello FearLess, I want to book: ${serviceName} (${price}).`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
}
