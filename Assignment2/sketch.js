// i followed these tutorial off of p5js
// https://p5js.org/tutorials/data-structure-garden/
// https://p5js.org/tutorials/writing-accessible-canvas-descriptions/
// i made it a heart instead of a flower
let heartList = [];

function setup() {
  createCanvas(windowWidth, windowHeight); 
// i change the canvas size to be the size of the window
  frameRate(30); 
// i changed the frame rate for better animation
  background(220);
  heartPower();
}

function draw() {
  background("lightcyan");
// i changed the bg color to light cyan instead of light blue
  
  updateAndDrawHearts();

  textSize(45);
// i changed the text size so its eaiser to read
  textStyle(NORMAL);
  fill(0);
// added fill so that the text colour will stay black while you click on the screen 
// because before it would change colour everytime you would click on the screen matching the heart colours
  describeElement('Text', 'The text "Click on screen to watch hearts appear then slowly disappear!" in the upper left corner of a lightcyan canvas.');
  text('Click on screen to watch hearts appear then slowly disappear!', 100, 385);
// i changed the desribe element to be in the middle of the screen
}

function createHeart() {
  let generatedHeart = {
    x: random(20, width - 20),
    y: random(20, height - 20),
    size: random(15, 100), 
// i changed the mix size to be 15 and max to be 100
    lifespan: random(255, 300),
    color: color(random(255), random(0), random(255)), 
// i changed the colours to be random (blue-red shades)
  };
  
  return generatedHeart;
}

function drawHeart(heartObj) {
  noStroke();
  fill(heartObj.color);

  circle(heartObj.x - heartObj.size * 0.25, heartObj.y, heartObj.size * 0.5);
  circle(heartObj.x + heartObj.size * 0.25, heartObj.y, heartObj.size * 0.5);

  beginShape();
  vertex(heartObj.x - heartObj.size * 0.5, heartObj.y);
  vertex(heartObj.x + heartObj.size * 0.5, heartObj.y);
  vertex(heartObj.x, heartObj.y + heartObj.size * 0.7);
  endShape(CLOSE);
// i made the shapes to be hearts instead of flowers
}

function heartPower() {
  for (let i = 0; i < 20; i++) {
    heartList.push(createHeart());
  }
}

function updateAndDrawHearts() {
  for (let i = heartList.length - 1; i >= 0; i--) {
    let heartObj = heartList[i];
    
    // Update properties of the heart
    heartObj.size *= 0.98;
    heartObj.lifespan -= 5; 
// i changed the life span to 5 so the decrease 
    
    if (heartObj.lifespan <= 0) {
      heartList.splice(i, 1);
    }

    drawHeart(heartObj);
  }
}

function mousePressed() {
  let heart = createHeart();

  heart.x = mouseX;
  heart.y = mouseY;

  heartList.push(heart);
}