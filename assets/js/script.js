document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Security & UX Restrictions ---
    
    // Disable Right Click
    document.addEventListener('contextmenu', event => event.preventDefault());

    // Disable Key Combinations for Zoom (Ctrl+, Ctrl-, Ctrl+0) and Developer Tools
    document.addEventListener('keydown', (e) => {
        if (
            (e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '0' || e.key === '=')) || // Zoom
            (e.ctrlKey && e.shiftKey && e.key === 'I') || // DevTools
            (e.ctrlKey && e.shiftKey && e.key === 'J') || // DevTools
            (e.ctrlKey && e.key === 'U') // View Source
        ) {
            e.preventDefault();
        }
    });

    // Disable Wheel Zoom (Ctrl + Scroll)
    document.addEventListener('wheel', (e) => {
        if (e.ctrlKey) {
            e.preventDefault();
        }
    }, { passive: false });

    // --- 2. Mobile Menu Toggle ---
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('menu');

    if(btn && nav) {
        btn.addEventListener('click', () => {
            btn.classList.toggle('open');
            nav.classList.toggle('flex');
            nav.classList.toggle('hidden');
        });
    }

    // --- 3. Testimonial Animation Logic ---
    const scrollers = document.querySelectorAll(".scroller");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        scrollers.forEach((scroller) => {
            scroller.setAttribute("data-animated", "true");
            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", "true");
                scrollerInner.appendChild(duplicatedItem);
            });
        });
    }

    // --- 4. FAQ Accordion ---
    const accordions = document.querySelectorAll('.accordion-header');
    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            } 
        });
    });

    // Update Year
    document.getElementById('year').textContent = new Date().getFullYear();
});
