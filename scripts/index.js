

// 5. Event Listeners


// MOBILE MENU TOGGLE
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        icon.className = "fa-solid fa-xmark text-2xl";
    } else {
        menu.classList.add('hidden');
        icon.className = "fa-solid fa-bars text-2xl";
    }
}

// PREMIUM GALLERY FILTERING (Tailwind Grid Safe)
function filterGallery(category, buttonEl) {
    const buttons = buttonEl.parentElement.children;
    for (let btn of buttons) { btn.classList.remove('active-tab'); }
    buttonEl.classList.add('active-tab');

    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        const matchesCategory = category === 'all' || item.getAttribute('data-category') === category;
        if (matchesCategory) {
            item.classList.remove('hidden');
            setTimeout(() => { item.classList.add('reveal-visible'); }, 50);
        } else {
            item.classList.add('hidden');
            item.classList.remove('reveal-visible');
        }
    });
}

// MULTI-DIRECTION INTERSECTION OBSERVER
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.50 // Triggers when 12% of the element hits the screen
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select and observe all variations of our design tokens
    const animationSelectors = ".reveal-up, .reveal-down, .reveal-left, .reveal-right, .reveal-scale";
    document.querySelectorAll(animationSelectors).forEach(el => observer.observe(el));
});

document.getElementById('see-more-btn').addEventListener('click', function() {
    // Find all team cards that are hidden
    const hiddenCards = document.querySelectorAll('#team-grid .team-card.hidden');
    
    if (hiddenCards.length > 0) {
        // Reveal all remaining hidden cards
        hiddenCards.forEach(card => {
            card.classList.remove('hidden');
        });
        
        // Change button text and change the arrow direction to up
        this.innerHTML = `
            Show Less
            <svg class="ml-2 h-4 w-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
            </svg>
        `;
    } else {
        // If already fully expanded, hide everything after the first 4 profiles again
        const allCards = document.querySelectorAll('#team-grid .team-card');
        allCards.forEach((card, index) => {
            if (index >= 4) {
                card.classList.add('hidden');
            }
        });
        
        // Reset button text back to original
        this.innerHTML = `
            See More Team Members
            <svg class="ml-2 h-4 w-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        `;
        
        // Optional: Smoothly scroll back to the top of the team grid section
        document.getElementById('team').scrollIntoView({ behavior: 'smooth' });
    }
});
