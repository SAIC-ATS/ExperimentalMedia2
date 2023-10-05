let allText = [
  "Zitian",
  "This is your Assignment 2 prompt",
  "For this assignment I would like you to explore creative code",
  "blank",
  "do you ever feel dizzy by technology?",
  "Have you ever lost your balance navigating through a system of rules?",
  "In what ways can you use interaction to conjure a new kind of feeling?",
  "sublime, fear, hope...",
  "Your prompt for this assignment is to craft an expressive experience using only code",
  "dispair, curiosity, rage...",
  "Consider the context of the internet as a playground for emotion.",
  "We will be sharing assignment #2 in small critique groups on October 27th",
  "apathy, lust, wonder...",
  "Be prepared to present your work so this small group can perform or experience your work directly.",
  "A link or documentation of your work should be uploaded to canvas to receive credit",
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
