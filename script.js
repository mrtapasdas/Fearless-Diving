document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. SECURITY & UX ---
    
    // Disable Right Click
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    // Disable Shortcuts (Ctrl+U, Ctrl+Shift+I, F12)
    document.addEventListener('keydown', (e) => {
        if (
            (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'p')) ||
            (e.ctrlKey && e.shiftKey && e.key === 'I') ||
            e.key === 'F12'
        ) {
            e.preventDefault();
        }
    });

    // --- 2. MOBILE MENU TOGGLE ---
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('menu');

    if(btn && nav) {
        btn.addEventListener('click', () => {
            // Toggle visibility classes
            nav.classList.toggle('hidden');
            nav.classList.toggle('flex');
        });
    }

    // --- 3. DYNAMIC YEAR ---
    const yearSpan = document.getElementById('year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- 4. WHATSAPP BOOKING FUNCTION ---
    // Make it global so HTML onclick works
    window.bookService = function(serviceName, price) {
        const phoneNumber = "919876543210"; // Replace with your number
        const message = `Hi FearLess Diving! I am interested in booking: ${serviceName} (Price: ₹${price}). Please share more details.`;
        
        // Detect if mobile or desktop for better URL
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const baseUrl = isMobile ? 'https://api.whatsapp.com/send' : 'https://web.whatsapp.com/send';
        
        const url = `${baseUrl}?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };
});
