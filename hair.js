function setup() {
  createCanvas(200, 300);
  rectMode(CENTER);
  background(220);
  
  //face
  fill(223,255,255);
  ellipse(width / 2, height / 2, 120, 120)

  //eyes
  fill(0,0,180);
  let gap = 20;
  ellipse(width / 2 - gap, height / 2, 20, 20)
  ellipse(width / 2 + gap, height / 2, 20, 20)
  
  //mouth
  fill(255,0,0);
  rect(width/2, height / 2 + 30, 80, 10);
  
}

function draw() {
  fill(153, 41,0)
  if(mouseIsPressed){
    ellipse(mouseX, mouseY, 25,25);
  }
}
