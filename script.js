document.addEventListener("DOMContentLoaded", () => {
    
    // --- SECURITY FEATURES ---
    
    // Disable Right Click
    document.addEventListener('contextmenu', event => event.preventDefault());

    // Disable Key Combinations (Ctrl+U, Ctrl+C, F12, Zoom)
    document.addEventListener('keydown', function(e) {
        if (
            e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && e.key === 'I') || 
            (e.ctrlKey && e.key === 'u') || 
            (e.ctrlKey && e.key === 'c') ||
            (e.ctrlKey && (e.key === '=' || e.key === '-' || e.key === '0')) // Zoom
        ) {
            e.preventDefault();
            return false;
        }
    });

    // Disable Wheel Zoom
    document.addEventListener('wheel', function(e) {
        if (e.ctrlKey) {
            e.preventDefault();
        }
    }, { passive: false });


    // --- UI FUNCTIONALITY ---

    // Mobile Menu Toggle
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('menu');

    btn.addEventListener('click', () => {
        nav.classList.toggle('hidden');
        nav.classList.toggle('flex');
    });

    // Review Slider Logic (Only runs if element exists)
    const slides = document.querySelectorAll('.review-slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        const slideInterval = setInterval(nextSlide, 5000);

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            answer.classList.toggle('hidden');
            const icon = question.querySelector('i');
            icon.classList.toggle('fa-plus');
            icon.classList.toggle('fa-minus');
        });
    });

    // Current Year for Footer
    document.getElementById('year').textContent = new Date().getFullYear();
});

// Dynamic WhatsApp Link Generator
function bookOnWhatsApp(serviceName, price) {
    const phone = "919876543210"; // Replace with actual number
    const text = `Hello FearLess Diving, I would like to book the *${serviceName}* package priced at ₹${price}. Please provide available dates.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}
