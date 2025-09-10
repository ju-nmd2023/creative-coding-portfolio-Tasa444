function setup() {
  createCanvas(600, 600);
  frameRate(10);
}

const size = 10;
const divider = 1;
const numRows = 15;
const numCols = 60;

let counter = 0;

function draw() {
  background(255, 255, 255);
  noStroke();
  fill(0, 0, 139);

  // noiseSeed(0);
  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < numCols; x++) {
      const value = noise(x / divider, y / divider, counter) * size;
      
      /*The inspiration for the triangles
      *came from the cheat sheet
      *from the FOP course*/
     
      // Center of the triangle
      let cx = size / 2 + x * size;
      let cy = size / 2 + y * size;

      // Equilateral triangle points
      let h = (sqrt(10000) / 2) * value; // height of equilateral triangle
      triangle(
        cx, cy - (2 / 3) * h,          // top vertex
        cx - value / 2, cy + h / 1,    // bottom left
        cx + value / 2, cy + h / 1     // bottom right
      );
    }
  }

  counter += 0.1;
}
