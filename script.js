// Cursor Effect
const cursor = document.getElementById("cursor");
const body = document.body;

document.addEventListener('mousemove', (e) => {
   cursor.style.left = e.clientX+"px";
  cursor.style.top = e.clientY+"px";
  
    // Create 2 sparks per move for a denser trail
    createSpark(e.pageX, e.pageY);
    if (Math.random() > 0.5) createSpark(e.pageX, e.pageY); 
});

function createSpark(x, y) {
    const spark = document.createElement('div');
    spark.className = 'magic-spark';
    
    // Random drift distance
    const dx = (Math.random() - 0.5) * 100; // Drifts up to 50px left or right
    const dy = (Math.random() - 0.5) * 100; // Drifts up to 50px up or down
    
    // Set custom variables for the CSS animation to use
    spark.style.setProperty('--dx', `${dx}px`);
    spark.style.setProperty('--dy', `${dy}px`);

    // Position the spark
    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;

    // Randomize initial size
    const size = Math.random() * 10 + 5;
    spark.style.width = `${size}px`;
    spark.style.height = `${size}px`;

    document.body.appendChild(spark);

    setTimeout(() => {
        spark.remove();
    }, 1000);
}

// Inside createSpark function
const offsetX = (Math.random() - 0.5) * 10;
const offsetY = (Math.random() - 0.5) * 10;
spark.style.left = `${x + offsetX}px`;
spark.style.top = `${y + offsetY}px`;




