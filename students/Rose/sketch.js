let allText = [
  "Rose",
  "This is your Assignment 2 prompt",
  "I was so intrigued by your response to assignment #1!",
  "blank",
  "I appreciate your curiosity surrounding the data our bodies and physical presence can produce.",
  "I am also struck by the influence collaboration takes in your work and the ways in shapes the process of how you make.",
  "For your second assignment, I would like you to create a new work without any form of collaboration what so ever. ",
  "Importantly, I would like you to begin this new work tomorrow.",
  "Your idea for what this project will be likely will not be clear.  Work without knowing what the outcome will be. ",
  "Start a daily practice where you add a little bit more to the project each day.",
  "Be prepared to present your work so this small group can perform or experience your work directly.",
  "We will be sharing assignment #2 in small critique groups on October 27th",
  "Consider processes that require little planning... blind contour drawings, sketching in code, dancing to your favorite music.",
  "A link or documentation of your work should be uploaded to canvas to receive credit",
  "click, touch, speak, listen, look, press, shake, run, link, find, expose, wait... dont forget to document along the way.",
  "Good luck!",
  "If you want to meet to discuss your ideas or trouble shoot, contact myself or Yvonne",
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
