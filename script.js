const cursor = document.querySelector('#cursor');
const body = document.body;

document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    body.style.backgroundPositionX = `${e.pageX / -4}px`;
    body.style.backgroundPositionY = `${e.pageY / -4}px`;

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

// background
const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let flakes = [];

class Snow {
  constructor(){
    this.x = Math.random()*canvas.width;
    this.y = Math.random()*canvas.height;
    this.r = Math.random()*3+1;
    this.speed = Math.random()*1+0.5;
    this.wind = Math.random()*0.6-0.3;
    this.opacity = Math.random()*0.6+0.2;
  }

  draw(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
    ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;
    ctx.fill();
  }

  update(){
    this.y += this.speed;
    this.x += this.wind;

    if(this.y > canvas.height){
      this.y = -10;
      this.x = Math.random()*canvas.width;
    }
  }
}

function init(){
  flakes=[];
  for(let i=0;i<200;i++){
    flakes.push(new Snow());
  }
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  flakes.forEach(f=>{
    f.draw();
    f.update();
  });
  requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener("resize",()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

    document.addEventListener('DOMContentLoaded', () => {
            // --- Magic Scroll Reveal ---
            const reveals = document.querySelectorAll('.reveal');

            const revealOnScroll = () => {
                const windowHeight = window.innerHeight;
                const elementVisible = 100;

                reveals.forEach((reveal) => {
                    const elementTop = reveal.getBoundingClientRect().top;
                    if (elementTop < windowHeight - elementVisible) {
                        reveal.classList.add('active');
                    }
                });
            };

            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll(); // Trigger once on load
        });
