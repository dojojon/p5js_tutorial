const particles = [];
const particlesMax = 30;
const emitAmount = 2;

const gravity = -0.0;

function setup() {
  createCanvas(400, 400);
  noStroke();
}


function emit() {
  let c = 0;
  while (c < emitAmount) {

    const particle = {
      x: 20 + random(-10, 10),
      y: height,
      s: random(10, 40),
      vx: (random(-0.02, 0.02) + .2),
      vy: random(-.7, 0),
      dead: false,
    };

    particles.push(particle);
    c++;
  }
}

function draw() {
  background(120, 160, 200, 20);

  emit();

  fill(255, 255, 255, 2);

  particles.forEach((p) => {

    if (!p.dead) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy = p.vy + gravity;

      ellipse(p.x, p.y, p.s, p.s);

      if (p.y < 0) {
        p.dead = true;
      }

    }
  });

  // clean up the dead
  let c = particles.length - 1;
  while (c > 0) {

    if (particles[c].dead) {
      particles.splice(c, 1);
    }

    c--;
  }

}
