let allText = [
  "Liang",
  "This is your Assignment 2 prompt",
  "I was so intrigued by your response to assignment #1!",
  "blank",
  "The game mechanic you developed seemed like a pathway into the formation of new semiotic system of relation.",
  "What was your experience of watching your peers play the game in class?",
  "What narratives of call, response, winning, losing, underdogs, or champions did you witness begin to form?",
  "What would happen if this game was played in an infinite loop?",
  "For this assignment, I would like you to craft a rule as the medium for your work.",
  "Although you should consider the narrative possibilities of mechanic as metaphor, do not create a game for this assignment.",
  "Be prepared to present your work so this small group can perform or experience your work directly.",
  "We will be sharing assignment #2 in small critique groups on October 27th",
  "Consider media like websites, phone applications, browser plugins, etc",
  "A link or documentation of your work should be uploaded to canvas to receive credit",
  "Consider the ways that rules can govern our behavior without inviting us to play.",
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
