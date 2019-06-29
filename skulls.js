function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  // background(220);

  resetMatrix();
  noStroke();
  
  translate(random( width), random(height));
  rotate(random(360));
  
  fill(random(255), random(255), random(255));
  
  ellipse(0, 0, 140, 120);
  rect(0, 50, 70, 100);
  fill(0);
  ellipse(-30, 0, 30, 30);
  ellipse(30, 0, 30, 30);
  stroke(255);
  stroke(0)
  line(-30,80,30,80);
}
