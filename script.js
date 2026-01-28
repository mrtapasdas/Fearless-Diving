document.addEventListener('DOMContentLoaded', () => {
    
    // --- SECURITY FEATURES ---
    
    // Disable Right Click
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    // Disable Key Combinations (Ctrl+U, Ctrl+S, Ctrl+Shift+I, etc.)
    document.addEventListener('keydown', (e) => {
        if (
            (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S')) ||
            (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'I')) || 
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

    // --- UI LOGIC ---

    // Mobile Menu Toggle
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');

    if(btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }

    // Google Reviews Auto-Scroll
    const reviewContainer = document.querySelector('.review-container');
    if (reviewContainer) {
        let scrollAmount = 0;
        const scrollStep = 1;
        const delay = 30;

        function autoScroll() {
            if (reviewContainer.scrollLeft >= (reviewContainer.scrollWidth - reviewContainer.clientWidth)) {
                reviewContainer.scrollLeft = 0; // Reset to start
            } else {
                reviewContainer.scrollLeft += scrollStep;
            }
        }
        
        let scrollInterval = setInterval(autoScroll, delay);

        // Pause on hover
        reviewContainer.addEventListener('mouseenter', () => clearInterval(scrollInterval));
        reviewContainer.addEventListener('mouseleave', () => scrollInterval = setInterval(autoScroll, delay));
    }

    // Update Year in Footer
    const yearSpan = document.getElementById('year');
    if(yearSpan) yearSpan.innerText = new Date().getFullYear();
});
