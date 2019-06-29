const player = {
  x: 0,
  y: 0,
  height: 10,
  width: 40
}
let score = 0;
let scoreRate = 0.1;
const startBalls = 5;
const balls = [];
const playerSpeed = 2;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  player.x = width / 2;
  player.y = height - 15;

  let c = 0;
  while (c < startBalls) {
    const ball = {
      x: width / 2,
      y: height / 2,
      vx: random(-2, 2),
      vy: random(-1, -3),
      c: [random(255), random(255), random(255)]
    };
    balls.push(ball);
    c++;
  }
}

function draw() {
  background(220, 220, 200);
  drawPlayer();
  drawBalls();
  checkGameOver();
  drawScore();
}

function checkGameOver() {

  const ballsOnScreen =
    balls.filter(ball => ball.y < height);

  if (ballsOnScreen.length > 0) {
    score+=scoreRate;
  } else {
    textAlign(CENTER);
    textSize(20);
    fill(255, 0, 0);
    text("Game Over", width / 2, height / 2);
  }
}

function drawScore() {
  textAlign(LEFT);
  textSize(15);
  text("Score:" + score, 5, 15);
}

function drawBalls() {
  balls.forEach(ball => {

    ball.x += ball.vx;
    ball.y += ball.vy;

    if (ball.y < 0) {
      ball.vy = -ball.vy + random(-1, 1);
    }
    if (ball.x < 0) {
      ball.vx = -ball.vx+ random(-1, 1);
    }
    if (ball.x > width) {
      ball.vx = -ball.vx+ random(-1, 1);
    }

    if (ball.y > player.y - player.height / 2 &&
      ball.x > player.x - player.width / 2 &&
      ball.x < player.x + player.width / 2
    ) {
      ball.vy = -ball.vy;
      scoreRate++;
    }

    if (ball.y > height + 10) {
      ball.vx = 0;
      ball.vy = 0;
    }

    fill(ball.c);
    ellipse(ball.x, ball.y, 10, 10);
  });
}

function drawPlayer() {
  fill(255);

  if (touches.length > 0) {
    if (touches[0].x < width / 2) {
      player.x -= playerSpeed;
    } else {
      player.x += playerSpeed;
    }
  }

  if (keyIsDown(LEFT_ARROW)) {
    player.x -= playerSpeed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player.x += playerSpeed;
  }

  if (player.x < player.width / 2) {
    player.x = player.width / 2;
  }
  if (player.x > width - player.width / 2) {
    player.x = width - player.width / 2 - 1;
  }

  rect(player.x, player.y, player.width, player.height);
}
