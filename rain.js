
let drops = [];
let dropCount = 500;
let dropSize = 5;
const acceleration = 1;

function setup() {
    createCanvas(640, 480);
    background( 255);

    for (let d = 0; d < dropCount; d++) {
        drop = { x: random() * width, y: random() * height };
        drops.push(drop);
    }

}

function draw() {

    fill(255,5);

    rect(0,0,width, height);

    noStroke();
    fill(0,0,220, 22);

    drops.forEach((d) => {

        d.y = d.y+ acceleration;

        if(d.y > height){
            d.y = 0;
            d.x = random() * width;
        }

        rect(d.x, d.y, dropSize, dropSize);
    });

}