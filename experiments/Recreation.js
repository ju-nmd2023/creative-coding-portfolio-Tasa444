const size = 15;
const gap = 30;
const amount = 10;

function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(3);
}

function drawElement(counter) {
  push();
  const fields = 4;
  const s = size / fields;
  for (let x = 0; x < fields; x++) {
    for (let y = 0; y < fields; y++) {
      push();
      stroke(0);
      strokeWeight(1);
      if (Math.random() < 0.8) {
        /*These next lines of code that create
        *vertical and horizontal lines
        *were written by the help of Chat GPT
        */
        if (Math.random() < 0.5) {
          // Vertical line
          line(x * s + s / 2, y * s, x * s + s / 2, y * s + s);
        } else {
          // Horizontal line
          line(x * s, y * s + s / 2, x * s + s, y * s + s / 2);
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
      drawElement(0);
      pop();
    }
  }

  //noLoop();
}
