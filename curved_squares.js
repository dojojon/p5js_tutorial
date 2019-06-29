
function setup() {
  createCanvas(400, 400);

  rectMode(RADIUS);
  angleMode(DEGREES);
  background(220);

  size = width;
  noFill();

}

function draw() {

  background(200, 200, 200);

  let gap = 3;//map(mouseY, 0, height, 2, 100);
  let angle = map(mouseX, 0, width, 0, 5);
  translate(width / 2, height / 2);

  let size = width;
  while (size > gap) {
    rotate(angle);
    rect(0, 0, size, size);
    size = size - gap;
  }
}
