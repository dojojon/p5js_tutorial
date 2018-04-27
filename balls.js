
const ballCount = 250;
const balls = [];
const gravity = 0.7;

function setup() {

    createCanvas(600, 400);
    let n = 0;
    while (n < ballCount) {

        var ball = {
            x: random(0, width),
            y: random(0, height),
            velocity: random(-5, 5),
            color: {
                r: random(255), g: random(255), b: random(255)
            }
        };
        balls.push(ball);

        n++;
    }

}

function draw() {

    fill(0, 50);
    rect(0, 0, width, height);

    balls.forEach((ball) => {
        fill(ball.color.r, ball.color.g, ball.color.b);

        if (ball.y > height) {
            ball.velocity = -ball.velocity * .75;
            ball.y = height;
        }
        ball.velocity += gravity;
        ball.y += ball.velocity

        ellipse(ball.x, ball.y, 10);
    });

}

function mouseMoved() {
    balls.forEach((ball) => {
        if (ball.y > height && ball.x > mouseX - 20 && ball.x < mouseX + 20) {
            ball.velocity  = random(-34,-25);
        }
    });
}