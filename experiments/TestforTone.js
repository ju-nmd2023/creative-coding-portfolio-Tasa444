let synth;

function setup() {
  createCanvas(600, 600);
  frameRate(10);

  /*This line was written with the help of chat GPT*/
  synth = new Tone.Synth().toDestination();
}


const size = 10;
const divider = 1;
const numRows = 15;
const numCols = 60;

let counter = 0;

/*Animation variables*/
let isAnimating = false;
let animationDuration = 500;
let timeoutID;

/*Array of possible notes*/
const notes = ["C4", "D4", "E4", "G4", "A4", "B3", "F4"];

function draw() {
  background(255, 255, 255);
  noStroke();
  fill(0, 0, 139);

  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < numCols; x++) {
      const value = noise(x / divider, y / divider, counter) * size;

      /*Center of the triangle*/
      let cx = size / 2 + x * size;
      let cy = size / 2 + y * size;

     
      let h = (sqrt(10000) / 2) * value;
      triangle(
        cx, cy - (2 / 3) * h,
        cx - value / 2, cy + h, 
        cx + value / 2, cy + h  
      );
    }
  }

  /*Only update counter if animation is active*/
  if (isAnimating) {
    counter += 0.1;
  }
}

function mousePressed() {
  isAnimating = true;

  Tone.start();

    /*The logic for the following lines
  *was written with
  *the help of my friend Evan Koehler
  */
  const randomNote = random(notes);
  synth.triggerAttackRelease(randomNote, "8n");


  clearTimeout(timeoutID);

  timeoutID = setTimeout(() => {
    isAnimating = false;
  }, animationDuration);
}
