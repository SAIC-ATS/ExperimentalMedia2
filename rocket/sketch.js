let m = 0;
let speed = 0.9;
let f = 0;
var balls = [];
let prompt = "";

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  if (localStorage.getItem("prompt8") != null) {
    prompt = localStorage.getItem("prompt8");
    print(prompt);
  } else {
    prompt = "please allow local storage";
  }
}

function draw() {
  background(255 - f);
  m = m + speed;
  fill(0);
  triangle(
    -100 + m,
    height / 2 - 20,
    -100 + m,
    height / 2 + 10,
    0 + m,
    height / 2
  );
  textAlign(RIGHT);
  text(prompt, -450 + m, height / 2 - 30, 325);

  if (m > width + 120) {
    f = f + 0.5;
  }
  for (var i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].render();
    if (balls[i].ballisFinished()) {
      balls.splice(i, 1);
    }
  }
  if (m > width / 2 && m < width / 2 + 2) {
    explode();
  }
}

function explode() {
  for (let i = 0; i < 500; i++) {
    balls.push(new Ball(mouseX + random(-30, 30), mouseY + random(-30, 30)));
  }
  let button = createButton("pow!");
  button.position(width * 0.8, height * 0.7);
  button.mousePressed(terminate);
}

function mousePressed() {
  m = 0;
  //f = 0;
}
function terminate() {
  window.top.close();
}
