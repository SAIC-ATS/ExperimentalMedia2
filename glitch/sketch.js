let prompt = "";

function setup() {
  if (localStorage.getItem("prompt14") != null) {
    prompt = localStorage.getItem("prompt14");
  } else {
    prompt = "please allow local storage";
  }
  createCanvas(windowWidth, windowHeight);
  textSize(18);
  text(prompt, width / 4, height / 3, width / 2);
  frameRate(12);
}

function draw() {
  var x1 = floor(random(width));
  var y1 = 50;

  var x2 = round(x1 + random(-1, 1));
  var y2 = round(y1 + random(-1, 1));

  var w = floor(random(1, 1000));
  var h = height;

  set(x2, y2, get(x1, y1, w, h));
}
let see = 0;
function mouseClicked() {
  background(255, 150);
  see++;
  text(prompt, width / 4, height / 3, width / 2);
  if (see > 2) {
    let button = createButton("pow!");
    button.position(width - 200, height - 60);
    button.mousePressed(terminate);
  }
}

function terminate() {
  window.top.close();
}
