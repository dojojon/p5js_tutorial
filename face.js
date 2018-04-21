
var x = 0;

function setup() {
    createCanvas(640, 480);
}

function draw() {

    background(80, 100, 200);

    drawFace();

}

function drawFace() {
    fill(255, 200, 200);
    ellipse(width / 2, height / 2, 200, 255);
    drawEye(width / 2 - 40, height / 2 - 20);
    drawEye(width / 2 + 40, height / 2 - 20);
    drawNose();
    drawMouth();


}

function drawEye(x, y) {

    fill(255, 255, 255);
    ellipse(x, y, 55, 45);

    fill(0, 200, 235);
    ellipse(x, y, 20, 20);

    fill(0, 0, 0)
    ellipse(x, y, 10, 10);

}

function drawMouth() {

    fill(250, 100, 100)

    let x1 = width / 2 - 60;
    let x2 = width / 2 - 30;
    let x3 = width / 2 + 30;
    let x4 = width / 2 + 60;

    let y1 = 300;
    let y2 = 320;
    let y3 = 320;
    let y4 = 300;

    bezier(x1, y1, x2, y2, x3, y3, x4, y4);

    fill(250, 100, 100)

    y2 = 290;
    y3 = 290;

    bezier(x1, y1, x2, y2, x3, y3, x4, y4);

    line(x1, y1, x4, y4);

    /**  */
    fill(255, 0, 0)
    bezier(x1 + 20, y1 + 1, mouseX-20, mouseY, mouseX+20, mouseY, x4 - 20, y4 + 1);

}

function drawHair() {

}

function drawNose() {
    fill(155, 100, 100);

    const y = 260;
    const gap = 12;
    ellipse(width / 2 - gap, y, 10, 5);
    ellipse(width / 2 + gap, y, 10, 5);

}