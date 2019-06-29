function setup() {
  createCanvas(400, 400);
  background(220);

}

var n = 0;



function draw() {

  n = n + 1;

console.log(n);

  var x = random(width);
  var y = random(height);

  var s = random(20, 100);
  var i = s * .5;

  fill(200, 0, 200);

  ellipse(x - i, y - i, s, s);
  ellipse(x + i, y - i, s, s);
  ellipse(x - i, y + i, s, s);
  ellipse(x + i, y + i, s, s);

  fill(255, 252, 91);
  ellipse(x, y, s, s);


}
