function setup() {
  createCanvas(600, 600);
  frameRate(10);
}

const size = 10;
const divider = 1;
const numRows = 15;
const numCols = 60;

let counter = 0;

/*Animation variables*/
let isAnimating = false;
let animationDuration = 1000;
let timeoutID;

function draw() {
  background(255, 255, 255);
  noStroke();
  fill(0, 0, 139);

  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < numCols; x++) {
      const value = noise(x / divider, y / divider, counter) * size;

      // Center of the triangle
      let cx = size / 2 + x * size;
      let cy = size / 2 + y * size;

      // Equilateral triangle points
      let h = (sqrt(10000) / 2) * value;
      triangle(
        cx, cy - (2 / 3) * h,   // top vertex
        cx - value / 2, cy + h, // bottom left
        cx + value / 2, cy + h  // bottom right
      );
    }
  }

  // Only update counter if animation is active
  if (isAnimating) {
    counter += 0.1;
  }
}

function mousePressed() {
  // Start animation
  isAnimating = true;

  /*
  The logic for this written with
  *the help of my friend Evan Koehler
  */
  clearTimeout(timeoutID);

  // Stop animation after duration
  timeoutID = setTimeout(() => {
    isAnimating = false;
  }, animationDuration);
}
