// cursor
let cursor = document.querySelector('#cursor');
let body= document.querySelector('body');
document.addEventListener('mousemove', (e) => {
body.style.backgroundPositionX = e.pageX/-4 + 'px';
body.style.backgroundPositionY = e.pageY/-4 + 'px';
cursor.style.top = e.pageY + 'px';
cursor.style.left = e.pageX + 'px';            
})



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