var blocks = [];
var blockSize = 10;
var redraw = false;

function setup() {

    createCanvas(400, 400);





}

function draw() {

    if (redraw) {

        background(0);

        // noStroke();
        var next = drawHead();
        drawBody(next);


        redraw = false;
    }


}

function mouseClicked() {
    redraw = true;
}

function drawHead() {

    let headWidth = random(50, 250);

    let headHeight = random(50, 150);

    translate((width - headWidth) / 2, 10);
    fill(120, 120, 120);
    rect(0, 0, headWidth, headHeight);

    detailRect(headWidth, headHeight);

    resetMatrix()



    return headHeight;

}

function drawBody(next) {

    let segments = random(1, 5);
    let bodyWidth = random(50, 250);
    let bodyHeight = random(80, 150);

    let segmentGap = random(5, 10);
    let segmentWidth = random(bodyWidth * .25, bodyWidth);
    let segmentHeight = bodyHeight / segments;


    translate((width - bodyWidth) / 2, +next);
    let s = 0;
    translate(0, segmentGap);

    while (s < segments) {

        fill(105, 100, 100);
        rect((bodyWidth - segmentWidth) / 2, 0, segmentWidth, segmentGap);
        translate(0, segmentGap);

        fill(185, 180, 180);
        rect(0, 0, bodyWidth, segmentHeight);
        translate(0, segmentHeight);

        s++;
    }

    fill(185, 180, 180);
    rect((bodyWidth - segmentWidth) / 2, 0, segmentWidth, segmentGap);
    translate(0, segmentGap);

    resetMatrix();
    let coreWidth = random(10, segmentWidth);
    translate((width - coreWidth) / 2, +next);

    fill(120, 120, 120);
    translate(0, segmentGap * 2);
    rect(0, 0, coreWidth, bodyHeight)
    detailRect(coreWidth, bodyHeight);

}

function drawEngine() {

}

function detailRect(w, h) {

    push()
    fill(60, 60, 60);
    
    let size = 0;
    let gap = 2;
    let rows = 2;

    while (size < 4) {

        gap = random(2, 6);
        let n = Math.floor(random(1, 6));
        size = ((w - gap) / n) - gap;
        rows = Math.floor((h - gap) / (gap + size));
    }

    console.log(gap, size, rows);

    let r = 0;
    translate(0, gap);

    while (r < rows) {

        let x = gap;
        while ((x + gap) < w) {
            rect(x, 0, size, size);
            x = x + size + gap;
        }

        translate(0, (gap + size));
        r++;
    }

    pop();
}

