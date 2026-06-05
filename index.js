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