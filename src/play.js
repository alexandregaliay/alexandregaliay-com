import Particle from './particle.js';

class Sketch {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);

    this.width = document.documentElement.clientWidth;
    this.height = document.documentElement.clientHeight;

    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.time = 0;
    this.particles = [];
    this.raf();
    this.mousemove();
    this.x = 0;
    this.y = 0;
    this.colors = [
      "#e154ed",
      "#63d62b",
      "#23b1b6",
      "#ebbd3e"
    ]
  }

  randomColor() {
    return this.colors[Math.floor(Math.random()*this.colors.length)];
  }

  mousemove() {
    this.canvas.addEventListener('mousemove',(e)=>{
      this.x = e.clientX;
      this.y = e.clientY;
      for(let i = 0; i < 6; i++) {
        this.particles.push(new Particle(this.x,this.y,this.randomColor()));
      }
    })
  }

  raf() {
    this.time++;
    this.ctx.clearRect(0,0,this.width,this.height);
    // this.ctx.fillRect(this.x,this.y,100,100);
    this.particles.forEach((p,i)=>{
      if(p.life > 0) {
        p.draw(this.ctx);
      } else {
        this.particles.splice(i,1);
      }
    })
    window.requestAnimationFrame(this.raf.bind(this));
  }
}

new Sketch();
