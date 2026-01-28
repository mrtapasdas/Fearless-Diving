/* js/script.js */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. SECURITY & UI RESTRICTIONS ---
    
    // Disable Right Click
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    // Disable Key Combinations (Ctrl+U, Ctrl+S, Ctrl+C, Ctrl+Shift+I, Zoom)
    document.addEventListener('keydown', (e) => {
        // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
        if (
            e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) || 
            (e.ctrlKey && e.key === 'U') ||
            (e.ctrlKey && e.key === 'S') ||
            (e.ctrlKey && e.key === 'p')
        ) {
            e.preventDefault();
        }

        // Prevent Zoom (Ctrl + / Ctrl -)
        if (e.ctrlKey && (e.key === '=' || e.key === '-' || e.key === '0')) {
            e.preventDefault();
        }
    });

    // Prevent Wheel Zoom
    document.addEventListener('wheel', (e) => {
        if (e.ctrlKey) {
            e.preventDefault();
        }
    }, { passive: false });


    // --- 2. MOBILE MENU TOGGLE ---
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if(menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- 3. GOOGLE REVIEW SLIDER (SIMULATED) ---
    // Since we cannot use AJAX/API in this constraint, we cycle through static mock data
    const reviews = [
        { name: "Rahul S.", rating: 5, text: "Best diving experience in India! The instructors were super calm and professional.", img: "https://randomuser.me/api/portraits/men/32.jpg" },
        { name: "Sarah J.", rating: 5, text: "I was scared at first, but FearLess made me feel safe. Highly recommended!", img: "https://randomuser.me/api/portraits/women/44.jpg" },
        { name: "Amit K.", rating: 5, text: "Great equipment and amazing underwater photos included in the package.", img: "https://randomuser.me/api/portraits/men/85.jpg" }
    ];

    let currentReview = 0;
    const reviewContainer = document.getElementById('review-content');
    
    if(reviewContainer) {
        function showReview() {
            const r = reviews[currentReview];
            const stars = '<i class="fas fa-star text-yellow-400"></i>'.repeat(r.rating);
            
            reviewContainer.innerHTML = `
                <div class="flex flex-col items-center text-center transition-opacity duration-500 ease-in-out">
                    <img src="${r.img}" class="w-16 h-16 rounded-full mb-4 border-2 border-teal-500" alt="${r.name}">
                    <h3 class="text-xl font-bold text-teal-400">${r.name}</h3>
                    <div class="mb-2">${stars}</div>
                    <p class="text-gray-300 italic">"${r.text}"</p>
                    <div class="mt-2 text-xs text-gray-500"><i class="fab fa-google"></i> Posted on Google Maps</div>
                </div>
            `;
            currentReview = (currentReview + 1) % reviews.length;
        }
        
        showReview(); // Initial load
        setInterval(showReview, 4000); // Change every 4 seconds
    }

    // --- 4. ACCORDION (FAQ) ---
    const accordions = document.querySelectorAll('.accordion-btn');
    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            this.nextElementSibling.classList.toggle('hidden');
            this.querySelector('i').classList.toggle('fa-chevron-down');
            this.querySelector('i').classList.toggle('fa-chevron-up');
        });
    });
});

// Dynamic Copyright Year
const yearSpan = document.getElementById('year');
if(yearSpan) yearSpan.innerText = new Date().getFullYear();
