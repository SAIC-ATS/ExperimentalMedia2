var particles = [];
let prompt = "";

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(RADIUS);
  if (localStorage.getItem("prompt6") != null) {
    prompt = localStorage.getItem("prompt6");
  } else {
    prompt = "please allow local storage";
  }
}

function draw() {
  background(255);
  noFill();
  if (particles.length < 200) particles.push(new Particle());
  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();
  }

  fill(0);
  noStroke();
  textSize(24);
  text(prompt, width / 3, height / 4, width / 3);
}

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = random(width);
    this.y = random(-150, 0);
    this.vy = random(0.1, 2);
    this.maxy = this.y + height;
    this.r = 0;
    this.tr = 50;
    this.w = random(0.1, 2);
  }
  update() {
    if (this.y < this.maxy) {
      this.y += this.vy;
    } else {
      this.r++;
    }
    if (this.r > this.tr) this.reset();
  }
  display() {
    strokeWeight(this.w);
    if (this.y < this.maxy) {
      stroke(0, 150);
      push();
      translate(this.x, this.y);
      beginShape();
      strokeWeight(1);
      vertex(0, -5);
      quadraticVertex(3, 0, 0, 1);
      quadraticVertex(-3, 0, 0, -5);
      endShape(CLOSE);
      pop();
    } else {
      stroke(0, map(this.r, 0, this.tr, 0, 100));
      ellipse(this.x, this.y, this.r, this.r * 0.5);
    }
  }
}

function mouseClicked() {
  let button = createButton("pow!");
  button.position(width / 2, height * 0.7);
  button.mousePressed(terminate);
}

function terminate() {
  window.top.close();
}
//adapted from zygugi https://editor.p5js.org/zygugi/sketches/H1-5-1p5W
