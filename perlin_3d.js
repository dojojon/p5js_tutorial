const gridWidth = 70;
const gridDepth = 70;
const cellSize = 12;
const noiseFactor = 0.08;

let readiness;

let cameraPos = {
  x: 0,
  y: 300,
  z: 500
};


function preload() {
  readiness = loadFont('assets/Readiness-Medium.ttf');
}

function setup() {
  createCanvas(800, 600, WEBGL);
  angleMode(DEGREES);
  noiseSeed(124);
  textSize(16);
  textFont(readiness);
}


function draw() {
  background(100, 149, 237);
  fill(255);
  text('Use cusor keys to move.', -390, -280);

  updateCamera();

  rotateY(45);

  for (let z = 0; z < gridDepth; z++) {
    translate(0, 0, -cellSize);
    push()
    for (let x = 0; x < gridWidth; x++) {
      push();

      let height = map(noise(x * noiseFactor, z * noiseFactor), 0, 1, 0, 300);

      let color = [0, 255, 0];

      if (height <= 100) {
        height = 100
        color = [0, 0, 120];
      }

      if (height > 130) {
        color = [40, 100, 20];
      }

      if (height > 160) {
        color = [120, 120, 102];
      }

      if (height > 180) {
        color = [150, 150, 150];
      }

      if (height > 205) {
        color = [255, 255, 255];
      }

      fill(color);

      translate(0, -height, 0);
      box(cellSize, 100, cellSize);
      pop();

      translate(cellSize, 0, 0);
    }
    pop();
  }
}

function updateCamera() {
  
  if (keyIsDown(LEFT_ARROW)) {
    cameraPos.x += 10;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    cameraPos.x -= 10;
  }

  if (keyIsDown(UP_ARROW)) {
    cameraPos.z += 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    cameraPos.z -= 10;
  }

  translate(cameraPos.x, cameraPos.y, cameraPos.z);
}
