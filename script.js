if(window.innerWidth < 768){
   document.removeEventListener("mousemove", ()=>{});
}



// ===== MAGIC CURSOR =====
const cursor = document.getElementById("cursor");

document.addEventListener('mousemove', (e) => {
   cursor.style.left = e.clientX + "px";
   cursor.style.top = e.clientY + "px";
   createSpark(e.pageX, e.pageY);
});

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

