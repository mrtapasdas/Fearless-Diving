/* =========================================
   UI & FUNCTIONALITY
   ========================================= */

// Mobile Menu Toggle
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

if (btn && nav) {
    btn.addEventListener('click', () => {
        btn.classList.toggle('open');
        nav.classList.toggle('flex');
        nav.classList.toggle('hidden');
    });
}

// WhatsApp Booking Function
function bookNow(serviceName) {
    const phoneNumber = "919876543210"; // Replace with real number
    const text = `Hello FearLess Diving, I am interested in booking the *${serviceName}*. Please provide details.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}

// Simulated Google Reviews Fetcher (Mock Data for Demo)
const reviews = [
    { name: "Rahul Sharma", rating: 5, text: "Amazing experience! The instructors were very patient.", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Jessica Smith", rating: 5, text: "Best diving spot! The underwater view was breathtaking.", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Amit Verma", rating: 4, text: "Great service and safety protocols. Highly recommended.", img: "https://randomuser.me/api/portraits/men/85.jpg" }
];

let currentReview = 0;
const reviewContainer = document.getElementById('google-reviews-container');

function loadReview() {
    if (!reviewContainer) return;
    const r = reviews[currentReview];
    
    // Simulate Google Maps Review UI
    reviewContainer.innerHTML = `
        <div class="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 animate-fade-in transition-all duration-500">
            <div class="flex items-center mb-4">
                <img src="${r.img}" alt="${r.name}" class="w-12 h-12 rounded-full mr-4 border-2 border-cyan-500">
                <div>
                    <h4 class="font-bold text-white">${r.name}</h4>
                    <div class="text-yellow-400 text-sm">
                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                    </div>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" class="w-6 h-6 ml-auto" alt="Google">
            </div>
            <p class="text-slate-300 text-sm italic">"${r.text}"</p>
        </div>
    `;

    currentReview = (currentReview + 1) % reviews.length;
}

// Auto slide reviews every 4 seconds
if(reviewContainer) {
    loadReview();
    setInterval(loadReview, 4000);
}


/* =========================================
   SECURITY (Disable Right Click, Select, Zoom)
   ========================================= */

// Disable Right Click
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// Disable Text Selection and Dragging
document.addEventListener('selectstart', (e) => e.preventDefault());
document.addEventListener('dragstart', (e) => e.preventDefault());

// Disable Key Combinations (F12, Ctrl+U, Ctrl+S, Ctrl+C)
document.addEventListener('keydown', (e) => {
    // Prevent F12
    if (e.key === 'F12') {
        e.preventDefault();
    }
    // Prevent Ctrl+Shift+I (DevTools)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
    }
    // Prevent Ctrl+U (View Source)
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
    }
    // Prevent Ctrl+C (Copy)
    if (e.ctrlKey && e.key === 'c') {
        e.preventDefault();
    }
});

// Disable Zoom (Ctrl + Wheel)
document.addEventListener('wheel', (e) => {
    if (e.ctrlKey) {
        e.preventDefault();
    }
}, { passive: false });

// Disable Zoom (Ctrl + +/-)
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '=')) {
        e.preventDefault();
    }
});
