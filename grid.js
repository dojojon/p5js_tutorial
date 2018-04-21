
const cellSize = 30;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(100);
}

function draw() {

    var x = 0;
    var y = 0;
    while (x < width) {
        y = 0;
        while (y < height) {
            setColor(x, y);
            rect(x, y, cellSize, cellSize);
            y += cellSize;
        }
        x += cellSize;
    }
}

function setColor(x, y) {

    if (mouseX > x && mouseX < (x + cellSize)) {
        fill(255);
    }
    else if (mouseY > y && mouseY < (y + cellSize)) {
        fill(255);
    }
    else {
        fill(random(255), random(255), random(255));
    }
}
