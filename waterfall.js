let drops = [];
let dropCount = 1000;
let dropSize = 5;
const acceleration = 4;

function setup() {
    createCanvas(800, 600);
    background(0, 0, 50);

    for (let d = 0; d < dropCount; d++) {
        drop = {
            x: random() * width,
            y: random() * height,
        };
        drops.push(drop);
    }

}

function draw() {

    fill(0, 0, 50, 9);

    rect(0, 0, width, height);

    noStroke();
    fill(0, 0, 200, 122);

    drops.forEach((d) => {

        d.y = d.y + acceleration;

        if (d.y > height) {
            d.y = 0;
            d.x = random() * width;
        } else if (d.x - 10 < mouseX && d.x + 10 > mouseX
            && d.y + 20 > mouseY) {

            // d.color = { r: 255, g: 255, b: 255 };
            d.y = -random(100);
            d.x = random() * width;
        }

        ellipse(d.x, d.y, dropSize, dropSize);
    });




}