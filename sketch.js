let dots;
let m = 60;
let n = 15;
let radius = 2;

function setup() {
  createCanvas(600, 150);
  background(255);
  dots = new Dots(width, height, m, n, radius);
}

function draw() {
  background(255);
  dots.show();

  noStroke();
  fill(255);
  rect(100, 25, 400, 80);

  textSize(50);
  textFont('Monospace');
  fill(100);
  text('Daniel Sarno', width / 4, 80);
}