function setup() {
  createCanvas(400, 400);
  background(220);
  angleMode(DEGREES);
}

function draw() {

  
  
  
  rotate(random(360));
  
  translate(random(width), random(height));

  fill(255);

  ellipse(0, 0, random(80, 100), random(50, 60));

  fill(0, random(100, 220), random(60,220));
  ellipse(0, 0, random(40, 50));

  fill(0, 0, 0);
  ellipse(0, 0, random(20, 35));


}
