if(window.innerWidth < 768){
   document.removeEventListener("mousemove", ()=>{});
}



// ===== MAGIC CURSOR =====
if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {

    const cursor = document.getElementById("cursor");

    document.addEventListener("mousemove", e => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
        createSpark(e.pageX, e.pageY);
    });

}

function createSpark(x, y) {
    const spark = document.createElement('div');
    spark.className = 'magic-spark';

    const dx = (Math.random() - 0.5) * 100;
    const dy = (Math.random() - 0.5) * 100;

    spark.style.setProperty('--dx', `${dx}px`);
    spark.style.setProperty('--dy', `${dy}px`);

    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;

    const size = Math.random() * 10 + 5;
    spark.style.width = `${size}px`;
    spark.style.height = `${size}px`;

    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 1000);
}

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