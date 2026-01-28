document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if(menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 2. SECURITY FEATURES (Disable Right Click, Copy, Zoom)
    
    // Disable Right Click
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });

    // Disable Key Combinations (Ctrl+U, Ctrl+C, Ctrl+S, F12, Ctrl+Shift+I)
    document.addEventListener('keydown', (e) => {
        // Prevent F12 (Dev Tools)
        if(e.key === 'F12') {
            e.preventDefault();
            return false;
        }

        // Prevent Ctrl+Shift+I (Dev Tools)
        if(e.ctrlKey && e.shiftKey && e.key === 'I') {
            e.preventDefault();
            return false;
        }

        // Prevent Ctrl+C (Copy), Ctrl+U (View Source), Ctrl+S (Save)
        if (e.ctrlKey && (e.key === 'c' || e.key === 'u' || e.key === 's' || e.key === 'p')) {
            e.preventDefault();
            return false;
        }
    });

    // Disable Zoom (Ctrl + Wheel)
    document.addEventListener('wheel', (e) => {
        if (e.ctrlKey) {
            e.preventDefault();
        }
    }, { passive: false });

    // Disable Zoom (Touch - Pinch)
    // Note: 'touch-action: pan-x pan-y' usually handles this in CSS, 
    // but JS listener adds extra layer for older browsers.
    document.addEventListener('gesturestart', function(e) {
        e.preventDefault();
    });

    // 3. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});
