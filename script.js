document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Security & UX Restrictions ---
    
    // Disable Right Click
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    // Disable Key Combinations (Ctrl+U, Ctrl+C, F12, Ctrl+Shift+I, Zoom)
    document.addEventListener('keydown', (e) => {
        if (
            e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && e.key === 'I') || 
            (e.ctrlKey && e.key === 'u') || 
            (e.ctrlKey && e.key === 'c') ||
            (e.ctrlKey && (e.key === '=' || e.key === '-' || e.key === '0'))
        ) {
            e.preventDefault();
        }
    });

    // Disable Scroll Wheel Zoom
    document.addEventListener('wheel', (e) => {
        if (e.ctrlKey) {
            e.preventDefault();
        }
    }, { passive: false });

    // --- 2. Mobile Menu Toggle ---
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if(btn){
        btn.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }

    // --- 3. Dynamic WhatsApp Booking ---
    window.bookService = function(serviceName) {
        const phone = "919876543210"; // Replace with real number
        const text = `Hi FearLess Diving, I am interested in booking the *${serviceName}*. Please provide more details.`;
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    // --- 4. Auto Moving Reviews (Carousel) ---
    const reviewContainer = document.getElementById('review-container');
    if (reviewContainer) {
        let scrollAmount = 0;
        const speed = 2; // Speed of scroll
        
        function autoScroll() {
            scrollAmount += speed;
            if (scrollAmount >= reviewContainer.scrollWidth - reviewContainer.clientWidth) {
                scrollAmount = 0; // Reset
            }
            reviewContainer.scrollTo({
                top: 0,
                left: scrollAmount,
                behavior: 'auto' // smooth is too laggy for continuous
            });
        }
        
        // Use setInterval for simple auto movement
        setInterval(autoScroll, 50);
    }
});
