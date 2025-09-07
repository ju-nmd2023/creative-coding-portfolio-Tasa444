const divider = 5;         
const originalY = 250;    


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255, 255, 255);

  noiseSeed(0);
  beginShape();
  for (let x = 0; x < 600; x++) {
    const y = originalY + noise(x / divider) * 100;
    vertex(x, y);
  }
  endShape();

  /*Following code regarding rotation was written
  *with the help and explanation from Chat GPT*/

//Diagonal line +45°
  push();                                 
  translate(width / 2, height / 2);
  // rotate canvas 45 degrees       
  rotate(PI / 4);                         
  beginShape();
  for (let x = -width; x < width; x++) {  
    const y = 0 + noise(x / divider) * 100 - 100 / 2;
    vertex(x, y);
  }
  endShape();
  pop();                                 

  //Diagonal line -45°
  push();
  translate(width / 2, height / 2);
  // rotate canvas -45 degrees
  rotate(-PI / 4);                        
  beginShape();
  for (let x = -width; x < width; x++) {
    const y = 0 + noise(x / divider) * 100 - 100 / 2;
    vertex(x, y);
  }
  endShape();
  pop();

  noLoop();
}