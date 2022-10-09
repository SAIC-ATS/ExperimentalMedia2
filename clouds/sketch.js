let clouds;
let balloon = 0;
let speed;
let maxFrame;
let framePos;
let bool = false;
let ts = 0;
let s = 0.01;
let prompt = "";

function preload() {
  clouds = loadImage("clouds.gif");
}

function setup() {
  if (localStorage.getItem("prompt11") != null) {
    prompt = localStorage.getItem("prompt11");
  } else {
    prompt = "please allow local storage";
  }
  createCanvas(windowWidth, windowHeight);
  background(255);
  frameRate(12);
  image(clouds, 0, 0, width, height);
}

function draw() {
  //pasue gif from playing
  clouds.pause();

  //give the gif image a light opacity
  tint(255, 15);
  //draw the gif to the canvas
  image(clouds, 0, 0, width, height);
  //get the total number of frames in the gif animation
  maxFrame = clouds.numFrames() - 1;

  //set the speed variables to mouse movement on x and y axis
  let speedY = movedY;
  let speedX = movedX;

  //if mouse movement returns a negative value, reassign the variable with a positive
  if (movedY < 0) {
    speedY = speedY * -1;
  }
  if (movedX < 0) {
    speedX = speedX * -1;
  }

  //set global speed variable
  speed = speedX + speedY;

  //map the speed variable to a float between 0 and 1
  framePos = map(speed, 0, height, 0, height / 10, true);
  //convert the current frame of the animation + framePos to a whole number
  if (speed == 0) {
    if (bool) {
      framePos = framePos - 1;
    } else {
      framePos = framePos + 1;
    }
  }
  frameNum = floor(clouds.getCurrentFrame() + framePos);

  //if the frameNum exeeds the total number of frames in the animation, reset to 0
  if (frameNum >= maxFrame) {
    bool = true;
  } else if (frameNum < 1) {
    bool = false;
  }

  //set the frame to display
  clouds.setFrame(frameNum);

  fill(255, 200);
  textSize(18 + ts);
  text(prompt, 100, height / 3, width / 4);

  background(255, 10);
  ts = ts + s;

  if (ts > 10) {
    s = -s;
  }
  if (ts < -10) {
    s = -s;
  }

  if (mouseIsPressed) {
    fill(255, 6);
    stroke(255, 6);
    strokeWeight(random(10));
    ellipse(mouseX, mouseY, random(width));
    balloon++;
  }
  if (balloon > 30) {
    print("pop");
    let button = createButton("pow!");
    button.position(width - 100, 20);
    button.mousePressed(terminate);
  }
}

function mouseClicked() {}

function terminate() {
  window.top.close();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
