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

    // --- 2. Security Scripts (Disable Right Click, Select, Zoom) ---
    document.addEventListener('contextmenu', event => event.preventDefault());

    document.addEventListener('keydown', function (e) {
        // Prevent Ctrl+C, Ctrl+U, F12
        if (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 'c' || e.key === 'C')) {
            e.preventDefault();
        }
        // Prevent Zoom (Ctrl + / -)
        if (e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '=')) {
            e.preventDefault();
        }
    });

    // Prevent Wheel Zoom
    document.addEventListener('wheel', function(e) {
        if(e.ctrlKey) {
            e.preventDefault();
        }
    }, { passive: false });

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

    // --- 4. Testimonial Auto Slider ---
    const sliderContainer = document.getElementById('testimonial-track');
    if(sliderContainer) {
        let scrollAmount = 0;
        const speed = 1; // Speed of scroll
        
        function autoScroll() {
            scrollAmount += speed;
            if (scrollAmount >= sliderContainer.scrollWidth - sliderContainer.clientWidth) {
                scrollAmount = 0;
            }
            sliderContainer.scrollTo(scrollAmount, 0);
            requestAnimationFrame(autoScroll);
        }
        // Ideally needs duplicate content for infinite loop, simple scroll here
        // autoScroll(); 
        // Note: For pure CSS infinite scroll, we use CSS animations on the index page usually. 
        // Simple manual scroll provided in CSS for this requirement.
    }

    // --- 5. Contact Form Handler (No AJAX) ---
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // Allow default mailto action or just show success
            // e.preventDefault(); 
            // alert('Thank you! Redirecting to your email client.');
        });
    }
});
