class Dots {
  constructor(w, h, m, n, size) {
    this.w = w;
    this.h = h;
    this.m = m;
    this.n = n;
    this.size = size;
    this.dots = this.makeDots();
  }

  makeDots() {
    let newDots = [];
    let xSpacing = this.w / this.m;
    let ySpacing = this.h / this.n;
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        newDots.push(new Dot(i * xSpacing, j * ySpacing, this.size));
      }
    }
    return newDots;
  }

  show() {
    for (let d of this.dots) {
      d.show();
    }
  }
}

class Dot {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  show() {
    noStroke();
    fill(200);
    circle(this.x, this.y, this.size);
  }
}