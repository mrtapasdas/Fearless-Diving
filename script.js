// script.js

document.addEventListener('DOMContentLoaded', () => {
    
    /* -----------------------------------------------------------
       1. Security & UX Restrictions
    ----------------------------------------------------------- */
    
    // Disable Right Click
    document.addEventListener('contextmenu', event => event.preventDefault());

    // Disable Key Combos for Zoom and Inspect
    document.addEventListener('keydown', function(e) {
        // Ctrl+U (View Source), F12 (DevTools), Ctrl+Shift+I, Ctrl+S
        if (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'p')) {
            e.preventDefault();
        }
        // Zoom functionality (Ctrl + / Ctrl -)
        if (e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '=')) {
            e.preventDefault();
        }
    });

    // Disable Scroll Zoom (Ctrl + Wheel)
    document.addEventListener('wheel', function(e) {
        if (e.ctrlKey) {
            e.preventDefault();
        }
    }, { passive: false });

    /* -----------------------------------------------------------
       2. Mobile Menu Logic
    ----------------------------------------------------------- */
    const btnOpen = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    
    if(btnOpen && menu){
        btnOpen.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    /* -----------------------------------------------------------
       3. FAQ Accordion
    ----------------------------------------------------------- */
    const faqs = document.querySelectorAll('.faq-item');
    
    faqs.forEach(faq => {
        const question = faq.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const answer = faq.querySelector('.faq-answer');
            const icon = faq.querySelector('i');
            
            answer.classList.toggle('hidden');
            if(answer.classList.contains('hidden')){
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            } else {
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            }
        });
    });
});
