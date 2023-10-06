let win = [];
let para = [];
let winclose = [];
let output = ["GO", "BIG", "OR", "GO", "HOME"];
let l = 0;
let int = 0;
let winX = 3;
let randomrunner = 0;
let runprompt = false;
let finalbtn = false;
let curprompt = 0;
let run = 0;
let bg = 255;
let yoff = 0.0;
let txt = "";
let oldWin, newButton, button;
let p1 = false;
let c1, c2;
let x = 1;
let y = 1;
let easing = 0.01;
let angle = 0.0;
let jitter = 0.1;
let params = `width=210,height=200,left=1280,top=0`;
let params1 = `width=500,height=1000,left=0,top=0`;
let params2 = `width=1000,height=250,left=50,top=0`;
let params3 = `width=350,height=350, left=300, top=300`;
let params4 = `width=500,height=600,left=100,top=800`;
let params5 = `width=310,height=400,left=400,top=0`;
let params6 = `width=400,height=450,left=200,top=500`;

const alltext = JSON.parse(localStorage.getItem("prompts"));

function setup() {
  oldWin = window.self;
  winSet = [];
  frameRate(12);
  createCanvas(windowWidth, windowHeight);
  background(255, 200, 200);
  button = createButton(alltext[0]);
  button.position(width / 2, height / 2);
  button.mousePressed(promptA);

  stroke(0, 1);
  fill(255);
  textSize(24);
  textAlign(CENTER);
  t = text(txt, 0, 250, width);
  localStorage.setItem("program status", "begun");
  noStroke();
  textSize(28);
  textAlign(CENTER);
  windowResized();
}

function draw() {
  background(bg, 1);
  // shape1
  push();
  stroke(255, 5);
  fill(0, yoff * 0.75, 100, 2);
  beginShape();
  let aoff = 0; // Option #1: 2D Noise
  for (let x = 0; x <= width; x += 10) {
    let y = map(noise(aoff, yoff / 2), 0, 1, -100, height + 100);
    vertex(x, y);
    aoff += 0.05;
  }
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

  if (
    winSet[randomrunner] != null &&
    winSet[randomrunner].closed &&
    runprompt == false
  ) {
    if (window.confirm(alltext[4])) {
      for (let i = 0; i < 5; i++) {
        if (!winSet[i].closed) {
          winSet[i].close();
        }
      }
      prompt2();
    }
    runprompt = true;
  }

  for (let i = 0; i < 5; i++) {
    if (winSet[i] != null) {
      if (winclose[i] != winSet[i].closed) {
        p1 = true;
      }
      winclose[i] = winSet[i].closed;
    }
  }

  if (p1) {
    fill(random(150, 255), random(10, 255), random(50, 255));
    ellipse(random(width), random(height), random(100));
    p1 = false;
  }

  if (oldWin.closed) {
    if (curprompt == 2) {
      prompt3();
    } else if (curprompt == 3) {
      prompt4();
    } else if (curprompt == 4) {
      prompt5();
    } else if (curprompt == 5) {
      prompt6();
    } else if (curprompt == 6) {
      prompt7();
    }
  } else {
    background(bg, 1);
  }

  text(txt, 0, 50, width);

  if (finalbtn) {
    ellipse(width / 2, height / 2, random(50, 200));
  }
}

function promptA() {
  button.remove();
  if (!alert(alltext[1])) {
    prompt1();
  }
}

function prompt1() {
  curprompt = 1;
  if (!alert(alltext[2])) {
    for (let i = 0; i < 5; i++) {
      winSet[i] = window.open("../running/index.html", "running" + i, params);
      let r = random(-50, 0);
      winSet[i].moveBy(r * i, random(100, 180) * i);
      winSet[i].textOver = output[4 - i];
    }
  }
  clear();
  background(255, random(200), random(200), 10);
  if (winSet[0].screenX < 1300) {
    while (winX > 2) {
      for (let i = 0; i < 5; i++) {
        let r = random(-2, 1);
        winSet[i].moveBy(r, 0);
      }
      run++;
      winX = winSet[0].screenX;
    }
  } else {
    print(winSet[0].screenX);
  }
}

function prompt2() {
  localStorage.setItem("prompt6", alltext[6]);
  curprompt = 2;
  clear();
  background(255, random(200), random(200), 10);
  txt = alltext[5];
  oldWin = win[1];
  oldWin = window.open("../rain/index.html", "rain", params1);
  for (let i = 0; i < 5; i++) {
    winSet[i].close();
  }
}

function prompt3() {
  localStorage.setItem("prompt8", alltext[8]);
  curprompt = 3;
  clear();
  background(255, random(200), random(200), 10);
  txt = alltext[7];
  text(txt, 0, 250, width);

  oldWin = win[2];
  oldWin = window.open("../rocket/index.html", "rocket", params2);
}

function prompt4() {
  localStorage.setItem("prompt10", alltext[10]);
  curprompt = 4;
  clear();
  background(255, random(200), random(200), 10);
  txt = alltext[9];
  text(txt, 0, 250, width);

  oldWin = win[2];
  oldWin = window.open("../flora/index.html", "flora", params4);
}

function prompt5() {
  localStorage.setItem("prompt11", alltext[11]);
  curprompt = 5;
  clear();
  background(255, 200, 200);
  txt = alltext[12];
  text(txt, 0, 250, width);

  oldWin = win[2];
  oldWin = window.open("../clouds/index.html", "clouds", params3);
  while (int < 100) {
    oldWin.resizeBy(12, 8);
    oldWin.moveBy(10, -1);
    int++;
  }
}

function prompt6() {
  localStorage.setItem("prompt14", alltext[14]);
  curprompt = 6;
  clear();
  background(255, random(200), random(200), 10);
  txt = alltext[13];
  //text(txt, 0, 250, width);

  oldWin = win[2];
  oldWin = window.open("../glitch/index.html", "glitch", params5);
}

function prompt7() {
  curprompt = 7;
  bg = 0;
  b = true;
  clear();
  background(255, random(200), random(200), 10);
  txt = alltext[15];
  noStroke();
  let ts = map(windowWidth, 0, 4000, 12, 175);
  fill(200, 200, 0, 100);
  step = 1;
  Xdir = 3;
  stepY = 0;
  Ydir = 0;
  c1 = color(random(255), random(255), random(250), 0.5);
  c2 = color(random(255), random(255), random(250), 0.5);
  angleMode(DEGREES);
  fill(255);
  finalbtn = true;
}

function mouseClicked() {
  clear();
  background(255, random(200), random(200), 10);
  if (curprompt == 1) {
    for (let i = 0; i < 5; i++) {
      if (!winSet[i].closed) {
        winSet[i].close();
      }
    }
    prompt2();
  } else if (curprompt > 6) {
    localStorage.setItem("program status", "ended");
    oldWin = window.open("../download/index.html", "download", params6);
    window.self.close();
  }
  print(curprompt);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
