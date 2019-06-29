const cellSize = 4;
const noiseScale = 0.014;
let positionX = 0;

function setup() {
  createCanvas(400, 300);
  noiseSeed(12354);
  noStroke();
}

function draw() {
  background(220);
  drawMap();
}

function drawMap() {
  positionX +=0.01
  for (let y = 0; y < height; y += cellSize) {
    for (let x = 0; x < width; x += cellSize) {

      let height = noise(positionX + x * noiseScale, y * noiseScale);
      height = map(height, 0, 1, 0, 255);

      let c = [0, 0, height];

      if (height > 100) {
        c = [0, height + 50, 0]
      }
      if (height > 130) {
        c = [90, 77, 65]
      }
      if (height > 180) {
        c = height;
      }

      fill(c);

      rect(x, y, cellSize, cellSize);
    }
  }
}
