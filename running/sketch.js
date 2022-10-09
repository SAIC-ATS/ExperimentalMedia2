let runner;
let txtOver;
let play = false;

function preload() {
  runner = createImg("assets/running.gif", running);
}

function setup() {
  print(textOver);
}

function draw() {
  if (mousePressed) {
    runner.pause();
  }
}

function running() {
  runner.position(0, 0);
  runner.size(windowWidth, windowHeight);
  print("playing");
  let t = createDiv(textOver);
  t.style("color", "white", "font-size", "64px", "z-index", "10");
  t.position(10, windowHeight * 0.25);
}

function mouseReleased() {
  terminate();
}

function terminate() {
  window.top.close();
}
