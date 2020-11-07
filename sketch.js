let dots;
let m = 60;
let n = 20;
let radius = 3;

function setup() {
  createCanvas(600, 200);
  background(255);
  dots = new Dots(width, height, m, n, radius);
}

function draw() {
  dots.show();
}