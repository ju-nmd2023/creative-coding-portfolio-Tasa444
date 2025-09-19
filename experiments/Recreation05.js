let particles = [];

function setup() {
  createCanvas(innerWidth, innerHeight);
  blendMode(ADD);
  noStroke();
}


class Particle {
  constructor(x, y, size) {
    this.position = createVector(x, y);

    //This line was written with the help of chat GPT
    this.size = size || random(8, 28);  

    // Random direction
    const a = random(TWO_PI);

   
    const v = 0.2 + random();  
    this.velocity = createVector(
      Math.cos(a) * v,
      Math.sin(a) * v
    );

     /*This line was written with the help of my friend Evan Koehler
     lifespan depends on size (bigger = lives longer)
     */
    this.lifespan = 80 + random() * 120 * (this.size / 12);  
  }

  update() {
    this.lifespan--;
    //The multiply command was written with help of chat GPT
    this.velocity.mult(5);
  

    this.position.add(this.velocity);
  }

  draw() {
    push();
    translate(this.position.x, this.position.y);
    fill(255, 100, 0, 60);  
    ellipse(0, 0, this.size); 
    pop();
  }

  isDead() {
    return this.lifespan <= 0;
  }
}


function generateParticles(x, y, count = 80, minSize = 12, maxSize = 28) {
  
  /* Written with help of chat GPT
  *(each particle gets random size in given range)
  */
  for (let i = 0; i < count; i++) {
    const size = random(minSize, maxSize);
    const px = x + random(-size * 1.5, size * 1.5);
    const py = y + random(-size * 1.5, size * 1.5);
    particles.push(new Particle(px, py, size));
  }
}


function draw() {
  background(0);

  /*Loop Written with the help of my friend Evan Koehler*/
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.update();
    p.draw();
    if (p.isDead()) {
      particles.splice(i, 1);
    }
  }
}


function mouseClicked() {
 
  generateParticles(mouseX, mouseY, 60, 14, 34);  
}
