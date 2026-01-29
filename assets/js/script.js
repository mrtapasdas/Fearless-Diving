document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Mobile Menu Toggle ---
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('menu');

    if(btn && nav) {
        btn.addEventListener('click', () => {
            nav.classList.toggle('hidden');
            nav.classList.toggle('flex');
        });
    }

    // --- 2. Security Scripts ---
    document.addEventListener('contextmenu', event => event.preventDefault());
    
    // ... (Keep existing Keydown/Zoom prevention logic) ...

    // --- 3. Accordion Logic (FAQ) ---
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

    // REMOVED: Old JS Auto Scroll. 
    // We are now using CSS Animation in style.css for better performance.
});
