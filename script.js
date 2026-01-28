document.addEventListener('DOMContentLoaded', () => {
    
    // --- UI LOGIC ---

    // Mobile Menu Toggle
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');

    if(btn) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    // Dynamic Copyright Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const icon = item.querySelector('.fa-chevron-down');
            
            answer.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
        });
    });

    // WhatsApp Booking Logic
    window.bookService = function(serviceName) {
        const phone = "919876543210"; // Replace with real number
        const text = `Hi FearLess Diving, I am interested in booking: ${serviceName}. Please provide more details.`;
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    // Review Slider (Simple Auto-Scroll)
    const slider = document.getElementById('review-slider');
    if (slider) {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
            slider.scrollTo({
                top: 0,
                left: (scrollAmount += 300),
                behavior: 'smooth'
            });
            if(scrollAmount >= slider.scrollWidth - slider.clientWidth) {
                scrollAmount = 0;
            }
        }, 3000);
    }

    // --- SECURITY & UX RESTRICTIONS ---

    // 1. Disable Right Click
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
    });

    // 2. Disable Keyboard Shortcuts (Ctrl+U, Ctrl+C, Ctrl+S, F12)
    document.onkeydown = function(e) {
        if (e.keyCode == 123) { return false; } // F12
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { return false; } // Ctrl+Shift+I
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { return false; } // Ctrl+Shift+C
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { return false; } // Ctrl+Shift+J
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { return false; } // Ctrl+U
        if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) { return false; } // Ctrl+S
        if (e.ctrlKey && e.keyCode == 'C'.charCodeAt(0)) { return false; } // Ctrl+C
    };

    // 3. Disable Zoom (Wheel & Touch)
    document.addEventListener('wheel', function(e) {
        if (e.ctrlKey) {
            e.preventDefault();
        }
    }, { passive: false });

    // iOS/Mobile Zoom disable
    document.addEventListener('touchmove', function(event) {
        if (event.scale !== 1) { event.preventDefault(); }
    }, { passive: false });
});
