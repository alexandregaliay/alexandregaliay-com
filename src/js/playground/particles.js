class Particle {
  constructor(x,y,color) {
    this.x = x;
    this.y = y;
    this.velX = 4*(Math.random() - 0.5);
    this.velY = 4*(Math.random() - 0.5);
    this.defaultSize = 5;
    this.color = color;
    this.maxLife = 10;
    this.life = 10;
    this.grav = 0;
  }

  draw(ctx) {
    this.x += this.velX;
    this.y += this.velY + this.grav;

    this.velX *= 0.99;
    this.velY *= 0.99;

    this.grav += 0.05;
    this.life -= 0.1;
    this.size = this.defaultSize * this.life / this.maxLife;
    ctx.fillStyle = this.color;
    
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.fillRect(0, 0, this.size, this.size);
    ctx.restore();
  }
}

export default class Particles {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'particles';
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
      "#333333",
      "#570296",
      "#ff7edb",
      "#f97e72",
      "#03edf9",
      "#72f1b8",
      "#fede5d"
    ]
  }

  randomColor() {
    return this.colors[Math.floor(Math.random()*this.colors.length)];
  }

  mousemove() {
    this.canvas.addEventListener('mousemove', (e)=>{
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


