document.addEventListener("DOMContentLoaded", () => {
    // 1. Select the elements
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-links");

    // 2. check if they exist
    if (!hamburger || !navMenu) {
        console.error("Critical Error: Hamburger or Nav Menu not found in HTML.");
        return;
    }

    console.log("Hamburger logic loaded successfully.");

    // 3. Add the click listener
    hamburger.addEventListener("click", () => {
        console.log("Hamburger clicked!"); // Check if this prints when you click
        
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // 4. Close menu when a link is clicked
    document.querySelectorAll(".nav-links li a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });
});


