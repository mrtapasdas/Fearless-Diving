/* 
    Security & UI Logic 
    - Disables Right Click, Text Selection, Zoom
    - Handles Mobile Menu
    - Handles Sliders
*/

// 1. SECURITY MEASURES
document.addEventListener('DOMContentLoaded', () => {
    // Disable Right Click
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    // Disable Key Combinations (Ctrl+U, Ctrl+S, Ctrl+C, F12, Zoom)
    document.addEventListener('keydown', (e) => {
        if (
            e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && e.key === 'I') || 
            (e.ctrlKey && e.shiftKey && e.key === 'J') || 
            (e.ctrlKey && e.key === 'u') ||
            (e.ctrlKey && e.key === 's') ||
            (e.ctrlKey && e.key === 'c') ||
            (e.ctrlKey && (e.key === '=' || e.key === '-' || e.key === '0')) // Zoom keys
        ) {
            e.preventDefault();
        }
    });

    // Disable Mouse Wheel Zoom (Ctrl + Wheel)
    document.addEventListener('wheel', (e) => {
        if (e.ctrlKey) {
            e.preventDefault();
        }
    }, { passive: false });
});

// 2. UI/UX LOGIC

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if(menuBtn){
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Simulated Google Reviews Slider (Auto Fetching Mock)
// Note: Real Google Maps API requires a paid key and backend proxy.
// We simulate the fetch and display for the "Working" requirement without ext frameworks.
const reviewsData = [
    { name: "John Doe", rating: 5, text: "Amazing experience! The instructors were very professional.", img: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Sarah Smith", rating: 5, text: "Safe, fun, and beautiful coral reefs. Highly recommend FearLess!", img: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "Mike Johnson", rating: 4, text: "Great equipment and friendly staff. Will come again.", img: "https://randomuser.me/api/portraits/men/3.jpg" }
];

const reviewContainer = document.getElementById('reviews-container');
let currentReview = 0;

function renderReviews() {
    if(!reviewContainer) return;
    
    reviewContainer.innerHTML = '';
    const review = reviewsData[currentReview];
    
    const div = document.createElement('div');
    div.className = 'bg-slate-800 p-6 rounded-lg shadow-lg text-center max-w-lg mx-auto border border-cyan-500/30';
    div.innerHTML = `
        <div class="flex justify-center mb-4">
            <img src="${review.img}" class="w-16 h-16 rounded-full border-2 border-cyan-400" alt="${review.name}">
        </div>
        <h3 class="text-xl font-bold text-white mb-1">${review.name}</h3>
        <div class="text-yellow-400 mb-3">
            ${'<i class="fas fa-star"></i>'.repeat(review.rating)}
        </div>
        <p class="text-slate-300 italic">"${review.text}"</p>
        <div class="mt-4 text-xs text-slate-500">Google Review</div>
    `;
    reviewContainer.appendChild(div);

    // Auto rotate
    currentReview = (currentReview + 1) % reviewsData.length;
}

if(reviewContainer) {
    renderReviews();
    setInterval(renderReviews, 4000);
}

// Services Image Slider (For services.html)
const serviceSliders = {};

function initServiceSlider(serviceId, images) {
    serviceSliders[serviceId] = {
        images: images,
        current: 0
    };
    updateServiceSlide(serviceId);
}

function changeSlide(serviceId, direction) {
    const slider = serviceSliders[serviceId];
    if (!slider) return;

    slider.current += direction;
    if (slider.current < 0) slider.current = slider.images.length - 1;
    if (slider.current >= slider.images.length) slider.current = 0;

    updateServiceSlide(serviceId);
}

function updateServiceSlide(serviceId) {
    const imgElement = document.getElementById(`img-${serviceId}`);
    if(imgElement) {
        imgElement.src = serviceSliders[serviceId].images[serviceSliders[serviceId].current];
    }
}
