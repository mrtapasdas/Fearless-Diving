// --- Security & UI Protection ---

document.addEventListener('DOMContentLoaded', () => {
    
    // Disable Right Click
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    // Disable Key Combinations (F12, Ctrl+Shift+I, Ctrl+U, Ctrl+S, Ctrl+P)
    document.onkeydown = function(e) {
        if (e.keyCode == 123) return false; // F12
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false; // Ctrl+Shift+I
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) return false; // Ctrl+Shift+C
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false; // Ctrl+Shift+J
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false; // Ctrl+U
        if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) return false; // Ctrl+S
        if (e.ctrlKey && e.keyCode == 'P'.charCodeAt(0)) return false; // Ctrl+P
    };

    // Disable Selection
    document.onselectstart = function() { return false; };

    // Disable Zoom (Ctrl + Wheel)
    document.addEventListener('wheel', function(e) {
        if (e.ctrlKey) {
            e.preventDefault();
        }
    }, { passive: false });

    // Disable Zoom (Touch Pinch) - Best effort for mobile
    document.addEventListener('touchmove', function(event) {
        if (event.scale !== 1) { 
           event.preventDefault(); 
        }
    }, { passive: false });

    // --- Functionality ---

    // Mobile Menu Toggle
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('menu');

    if(btn && nav){
        btn.addEventListener('click', () => {
            nav.classList.toggle('hidden');
            nav.classList.toggle('flex');
        });
    }

    // Google Reviews Auto Slider
    const slider = document.getElementById('reviews-slider');
    if (slider) {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
            slider.scrollLeft += 1;
            scrollAmount += 1;
            // Reset if reached end (approximation)
            if(scrollAmount >= (slider.scrollWidth - slider.clientWidth)){
                 slider.scrollLeft = 0;
                 scrollAmount = 0;
            }
        }, 20); // Speed
    }

    // Dynamic Current Year for Footer
    document.getElementById('year').textContent = new Date().getFullYear();
});

// WhatsApp Booking Function
function bookNow(serviceName) {
    const phone = "919876543210"; // Replace with real number
    const text = `Hello FearLess Diving, I am interested in booking: ${serviceName}. Please provide more details.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}
