let cellSize = 1;

function setup() {
    createCanvas(400, 400);
    noStroke();
}

function draw() {

    for (var x = 0; x < width; x += cellSize) {
        for (var y = 0; y < height; y += cellSize) {
            
            var c = 255 * noise(0.01 * x, 0.01 * y);

            if (c > 170) {
                fill(255);
            } else if (c > 150) {
                fill(70, 70 , 70);
            } else if (c > 130) {
                fill(0,20,0);
            } else if (c > 100) {
                fill(0,160,0);
            } else if (c > 80) {
                fill(0,200,0);
            } else if (c > 60) {
                fill('yellow');
            } else {
                fill('blue');
            }

            rect(x, y, cellSize, cellSize);
        }
    }
}