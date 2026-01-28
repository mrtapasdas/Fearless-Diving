document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. SECURITY RESTRICTIONS ---
    
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

    // --- 2. MOBILE MENU ---
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('menu');

    if(btn && nav) {
        btn.addEventListener('click', () => {
            nav.classList.toggle('hidden');
            nav.classList.toggle('flex');
        });
    }

    // --- 3. DYNAMIC YEAR ---
    const yearSpan = document.getElementById('year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- 4. BOOKING REDIRECT (Helper) ---
    // Usage: onclick="bookService('Scuba Diving', '2500')"
    window.bookService = function(serviceName, price) {
        const phone = "919876543210"; // Replace with real number
        const text = `Hello FearLess Diving, I want to book: ${serviceName} (Price: ₹${price}). Please provide details.`;
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    }
});
