let allText = [
  "Xiawen",
  "This is your Assignment 2 prompt",
  "Thank you for sharing your assignment #1 proposal today",
  "blank",
  "It was interesting to see an idea presented as an animation",
  "I encourage you to continue with that project so you can complete it before the end of the semester!",
  "For your second assignment, I would like you to create a new work using creative code",
  "Your prompt is to create an experience online that discovers something about the audience when they do not pay attention",
  "Consider using interaction and/ or surveilance as a means to challenge what an audience can control.",
  "What are strategies for negotiating consent online?",
  "Be prepared to present your work so this small group can perform or experience your work directly. Your work cannot be a proposal.",
  "We will be sharing assignment #2 in small critique groups on October 27th",
  "Consider media like websites, cookies, browser plugins, webcams, microphones etc",
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
