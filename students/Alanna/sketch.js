let allText = [
  "Alanna",
  "This is your Assignment 2 prompt",
  "I was fascinated by your response to assignment #1...",
  "blank",
  "it was compelling to witness the way you explored both phenomena and phenomenology within your system of pneumatics.",
  "I appreciated the way you explored a material and action via iteration and repurpose",
  "For your assignment #2 prompt, I would like you to create a multimedia essay.",
  "Consider the structures of thesis, argument, conclusion- or hypothesis, analysis and conclusion.",
  "Explore the possibilities of creative code to present an essay on a topic that reacts to the medium from which it is formed.",
  "Be prepared to present your work so this small group can perform or experience your work directly.",
  "Challenge yourself to explore how you can be direct, didactic, as well expressive in how the work communicates.",
  "We will be sharing assignment #2 in small critique groups on October 27th",
  "Consider media like websites, memes, hyperlinks, browser plugins, solar servers etc",
  "A link or documentation of your work should be uploaded to canvas to receive credit",
  "Be thoughtful about when, where and how an audience accesses your work.",
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
