let bigSparkles = [];
let skinnySparkles = [];
let centerGif;
let audio;
let playPauseButton;
let isPlaying = false;

class Sparkle {
  constructor(x, y, size, isSkinny = false) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.lifeSpan = 255;
    this.isSkinny = isSkinny;
    this.hue = random(360);
    this.color = color(this.hue, 100, 100, this.lifeSpan);
  }

  update() {
    this.lifeSpan -= 3;
    this.color = color(this.hue, 100, 100, this.lifeSpan);
  }

  display() {
    push();
    translate(this.x, this.y);
    fill(this.color);
    noStroke();

    beginShape();
    for (let i = 0; i < 8; i++) {
      let angle = TWO_PI / 8 * i + (this.isSkinny ? PI / 8 : 0);
      let r = i % 2 === 0
        ? this.size * (this.isSkinny ? 1.4 : 1)
        : this.size * (this.isSkinny ? 0.3 : 0.5);
      let x = cos(angle) * r * (this.isSkinny ? 0.5 : 1);
      let y = sin(angle) * r;
      vertex(x, y);
    }
    endShape(CLOSE);
    pop();
  }

  isDead() {
    return this.lifeSpan <= 0;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 255);
  noStroke();

  // Create and style the GIF
  centerGif = createImg('oia-uia.gif', 'sparkle gif');
  centerGif.size(300, 300); // Size the GIF
  centerGif.position(windowWidth / 2 - 150, windowHeight / 2 - 150);
  centerGif.style('z-index', '10');
  centerGif.style('pointer-events', 'none');

  // Create and style the audio
  audio = createAudio('OIIAOIIA  Spinning Cat X Akon - Right Now.wav');
  audio.volume(0.5);

  // Create and style the button
  playPauseButton = createButton('Give the cat music to dance to');
  playPauseButton.style('font-size', '20px');
  playPauseButton.style('padding', '12px 24px');
  playPauseButton.style('background-color', 'PaleVioletRed');
  playPauseButton.style('border', 'none');
  playPauseButton.style('border-radius', '10px');
  playPauseButton.style('cursor', 'pointer');
  playPauseButton.style('z-index', '20');

  // Position the button below the gif
  playPauseButton.position(windowWidth / 2 - 150, windowHeight / 2 + 170);
  playPauseButton.mousePressed(toggleAudio);
}

function toggleAudio() {
  if (isPlaying) {
    audio.pause();
    playPauseButton.html('Give the cat music to dance to');
  } else {
    audio.loop();
    playPauseButton.html('Pause the dance party');
  }
  isPlaying = !isPlaying;
}

function draw() {
  background(0, 25);

  if (frameCount % 5 === 0) {
    for (let i = 0; i < 4; i++) {
      bigSparkles.push(new Sparkle(random(width), random(height), random(10, 50), false));
      skinnySparkles.push(new Sparkle(random(width), random(height), random(8, 30), true));
    }
  }

  for (let i = bigSparkles.length - 1; i >= 0; i--) {
    bigSparkles[i].update();
    bigSparkles[i].display();
    if (bigSparkles[i].isDead()) {
      bigSparkles.splice(i, 1);
    }
  }

  for (let i = skinnySparkles.length - 1; i >= 0; i--) {
    skinnySparkles[i].update();
    skinnySparkles[i].display();
    if (skinnySparkles[i].isDead()) {
      skinnySparkles.splice(i, 1);
    }
  }
}