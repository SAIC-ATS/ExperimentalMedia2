let allText = [
  "Sam",
  "This is your Assignment 2 prompt",
  "I was so intrigued by your response to assignment #1!",
  "blank",
  "The performance was at once alarming, funny, curious, disorienting, unnerving...",
  "It left me wondering where the vignette would have gone if given more time",
  "For your second assignment, I would like you to explore the browser window as a site for performance",
  "In what ways can network a web of real time and captured media to produce new spectacles?",
  "Consider using interaction as a catalyst to guide your audience into a new state of feeling",
  "What kind of behaviors can you compell the audience to perform?",
  "We will be sharing assignment #2 in small critique groups on October 27th",
  "Be prepared to present your work so this small group can perform or experience it directly.",
  "Consider media like websites, phone applications, browser plugins, board games, toys etc",
  "A link or documentation of your work should be uploaded to canvas to receive credit",
  "click, touch, speak, listen, look, press, shake, run, link, find, expose, wait...",
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
