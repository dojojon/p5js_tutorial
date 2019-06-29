let n = 0;

function setup() {
  createCanvas(800, 400);

}

function draw() {
  n += .012;
  background(0);
  const f = 0.005;
  for (let x = 0; x < width + 50; x += 3) {
    // const y = random(height);
    const y = noise(n + x * f) * height;
    ellipse(x, y, 50);
  }


}
