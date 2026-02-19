document.addEventListener('DOMContentLoaded', () => {

    const cards = document.querySelectorAll('.parchment-card');

    if ('IntersectionObserver' in window) {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease-out';
            observer.observe(card);
        });

    } else {
        // Fallback for very old browsers
        cards.forEach(card => {
            card.style.opacity = '1';
        });
    }
});
