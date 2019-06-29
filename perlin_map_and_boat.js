const directions = [-1, 0, 1];
const cellSize = 2;
const zoom = .0113;
let mapPixels = null;

function setup() {
  createCanvas(600, 400);
  noStroke();

  // const seed = random(10000);
  const seed = 4345;
  noiseSeed(seed);
  console.log("seed", seed);

  drawMap();
  mapPixels = get();

}

function drawShip(x, y) {
  fill(255, 0, 0);
  rect(x * cellSize, y * cellSize, 5, 5);
}


function drawMap() {

  for (let y = 0; y < width; y += cellSize) {
    for (let x = 0; x < width; x += cellSize) {

      let color = map(noise(x * zoom, y * zoom), 0, 1, 0, 255);

      if (color > 210) {
        fill(color, color, color);
      } else if (color > 170) {
        fill(color - 40, color - 40, color - 40);
      } else if (color > 140) {
        color -= 50;
        fill(0, color, 0);
      } else {
        fill(0, 50, 120 + color);
      }
      rect(x, y, cellSize, cellSize);
    }

  }

}

let n = 0;
let ship = {
  x: 20,
  y: 20,
  d: {
    x: 1,
    y: 0
  }
}

function draw() {

  background(230);
  image(mapPixels, 0, 0);

  updateShip(ship);
  drawShip(ship.x, ship.y);

}

function updateShip(ship) {

  const isWaterNext = isWater(ship.x + ship.d.x, ship.y + ship.d.y);
  if (isWaterNext) {
    ship.x += ship.d.x;
    ship.y += ship.d.y;
  } else {
    ship.d.x = random(-1, 1);
    ship.d.y = random(-1, 1);
  }
}

function isWater(x, y) {

  const pixel = get(x * cellSize, y * cellSize);
  return pixel[2] > 180;

}
