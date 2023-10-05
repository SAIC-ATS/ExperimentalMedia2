let allText = [
  "Rose",
  "This is your Assignment 2 prompt",
  "alert message",
  "blank",
  "after race alert message",
  "mountains",
  "rain",
  "mountains",
  "rocket",
  "mountains",
  "flowers",
  "clouds",
  "mountains",
  "final",
  "glitch",
  "Good luck!",
  "If you want to meet to discuss your ideas or trouble shoot, contact myself or Nimo",
];
let newWindow;

function setup() {
  localStorage.setItem("prompts", JSON.stringify(allText));
  print("done");
  window.self.resizeTo(300, 300);
  window.self.moveTo(0, 0);
  newWindow = window.open(
    "../../assignment/index.html",
    "main",
    `width=500,height=500,left=2000,top=2000`
  );

  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
}

function draw() {
  background(0, 5);
  fill(255, random(3));
  ellipse(width / 2, height / 2, random(width));
}
