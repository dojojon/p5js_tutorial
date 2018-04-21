
let drops = [];
const dropSize = 8;
const dropGap = 2;
let dropCount = 1;

function setup() {
    createCanvas(400, 400);

    let dropX = 0;
    while (dropX < 100) {

        let c = 0;
        while (c < dropCount) {

            let drop = { x: dropX, y: c * (dropSize + dropGap) };
            c++;
            drops.push(drop);
        }
        dropX = dropX + dropSize + dropGap;
        // x++;
        console.debug(dropX);
    }

}


function draw() {

    background(120, 180, 255, 5);
    translate(100, 100);
    drawCloud();
    drawRain();
}

function drawCloud() {
    noStroke();
    fill(255);
    ellipse(0, 25, 50, 50);
    ellipse(100, 25, 50, 50);
    ellipse(40, 5, 80, 80);
    ellipse(80, 5, 40, 40);
    ellipse(5, 5, 30, 30);
    rect(0, 0, 100, 50);
}

function drawRain() {
    fill(255);
    translate(0, 52);
    console.log(drops.length);
    drops.forEach((d) => {
        rect(d.x, d.y, dropSize, dropSize);
        d.y += 3;
        if (d.y > random(50, 100)) {
            d.y = 0
        }
    });

}