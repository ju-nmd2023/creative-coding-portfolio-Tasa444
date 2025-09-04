const size = 50;
const gap = 10;
const amount = 5;
/*The code for rotation of each cell for this variation
*was taken from Chat GPT
*/
let rotationAngle = 0; // will increment slightly every frame

function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(20);
}

function drawElement(counter) {
  push();
  const fields = 25;
  const s = size / fields;
  for (let x = 0; x < fields; x++) {
    for (let y = 0; y < fields; y++) {
      push();
      stroke(0);
      strokeWeight(1);
      if (Math.random() < 0.8) {
      if (Math.random() < 0.8) {
  fill(0);
  circle(x * s + s / 2, y * s + s / 2, s);
}
      }
      pop();
    }
  }
  pop();
}

function draw() {
  background(255, 255, 255);
  noFill();
  stroke(0, 0, 0);
  strokeWeight(1);

  const centerX = (width - size) / 2;
  const centerY = (height - size) / 2;
  for (let x = -Math.floor(amount / 2); x < Math.ceil(amount / 2); x++) {
    for (let y = -Math.floor(amount / 2); y < Math.ceil(amount / 2); y++) {
      let xPosition = centerX + x * (size + gap);
      let yPosition = centerY + y * (size + gap);
      if (amount % 2 === 0) {
        xPosition += size / 2;
      }
      push();
translate(xPosition, yPosition);

// Rotate each cell slightly based on its position and global rotation
rotate(rotationAngle + (x + y) * 0.05);

drawElement(0);
pop();
    }
  }
  //noLoop();
}
