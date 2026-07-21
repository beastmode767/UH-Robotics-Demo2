document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Automatically target elements that should have the futuristic reveal effect
    // This saves you from having to manually edit all your HTML files
    const elementsToAnimate = document.querySelectorAll(
        '.highlight-item, .form-container, .quote-section, .glance-item, .left-column h2, .left-column h3, .left-column p'
    );
    
    elementsToAnimate.forEach(el => {
        el.classList.add('reveal');
    });

    // 2. Set up the Intersection Observer engine
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Triggers when 15% of the element is visible on screen
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'active' class to trigger the CSS animation
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // 3. Attach the observer to all targeted elements
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
    
    // 4. Add a futuristic neon-red glow to the navigation bar when scrolling
    const header = document.querySelector('.site-header');
    header.style.transition = "box-shadow 0.4s ease";
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Adds the UH Scarlet glow
            header.style.boxShadow = "0 4px 20px rgba(200, 16, 46, 0.5)"; 
        } else {
            header.style.boxShadow = "none";
        }
    });
});
