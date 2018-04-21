function setup() {
    createCanvas(600, 480);
    background(0, 255, 0);
    fill(255,0,0);
    rect(20, 20, 100, 100);
}

function draw() {
    fill(random(255),random(255),random(255));
    ellipse(random(width), random(height), random(5, 20),random(5,20));


    fill(255);
    ellipse(mouseX, mouseY, random(30),random(30));
    
}
