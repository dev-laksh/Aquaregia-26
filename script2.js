document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("track");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    // How far to scroll on each click (Card width + Gap)
    // 280px width + 30px gap = 310px approx
    const scrollAmount = 310; 

    nextBtn.addEventListener("click", () => {
        track.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    });

    prevBtn.addEventListener("click", () => {
        track.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });
    });
    
    // Optional: Hide arrows if at start or end of scroll
    track.addEventListener("scroll", () => {
        const maxScrollLeft = track.scrollWidth - track.clientWidth;
        
        // Simple opacity toggle
        prevBtn.style.opacity = track.scrollLeft <= 0 ? "0.3" : "1";
        nextBtn.style.opacity = track.scrollLeft >= maxScrollLeft - 10 ? "0.3" : "1";
    });
});