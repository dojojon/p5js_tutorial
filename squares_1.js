function setup() {

    createCanvas(400, 400);

    rectMode(CENTER);
    angleMode(DEGREES);

}

function draw() {

    background('black');

    stroke('yellow');
    noFill();

    translate(width / 2, height / 2);
    for (let x = 0; x < 360; x++) {

        rotate(x);
        scale(cos(x * 2 + frameCount));
        rect(5, 5, 200, 200);
    }

}