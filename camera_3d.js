var cam;

function setup() {
  createCanvas(600, 600, WEBGL);

  cam = createCapture(VIDEO);
  cam.hide();
}

function draw() {
  background(20);

  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.04);
  rotateZ(frameCount * 0.03);
  noStroke();
  texture(cam);

  for (let n = 0; n < 10; n++) {
    box(180);
    translate(200, 50, 0);
  }
}
