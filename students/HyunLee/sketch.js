let allText = [
  "Hyun Lee",
  "This is your Assignment 2 prompt",
  "I was so intrigued by your response to assignment #1!",
  "blank",
  "I appreciated the simplicity and nuanced directness you were able to achieve!",
  "For this assignment I would like you to consider unexpected relationships between media and the ways we touch technology.",
  "Create a new work that uses interactivity and creative code.",
  "Play with imagery, audio, action and reaction.",
  "Craft an experiance for your audience that questions cause and effect between a gesture and its consequence.",
  "Allow this work hold the audience captive for whatever time it needs.",
  "Be prepared to present your work so this small group can perform or experience your work directly.",
  "We will be sharing assignment #2 in small critique groups on October 27th",
  "Consider media like websites, phone applications, browser plugins, board games, toys etc",
  "A link or documentation of your work should be uploaded to canvas to receive credit",
  "Feel out how a theoretical framework can be made legible through your process.",
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
