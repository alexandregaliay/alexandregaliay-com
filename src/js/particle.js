export default class Particle {
  constructor(x,y,color) {
    this.x = x;
    this.y = y;
    this.velX = 4*(Math.random() - 0.5);
    this.velY = 4*(Math.random() - 0.5);
    this.defaultSize = 10;
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
