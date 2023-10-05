let allText = [
  "Lorenzo",
  "This is your Assignment 2 prompt",
  "I was so intrigued by your response to assignment #1!",
  "blank",
  "The spectacle of a slight of hand was such a surprising way to be reintroduced to a reformed venus",
  "I was left wondering about the context of the classroom, and how you might be thinking about where/how this work is documented",
  "For assignment #2 I would like to to consider documentation as material.",
  "In what ways do we seek to engage with a historical conciousness through our methods of capturing the past?",
  "How can you dig into a hostorical narrative through a computatiomnal process?",
  "What databases, archives, devices, or systems can you source a shifted conciousness within?",
  "We will be sharing assignment #2 in small critique groups on October 27th",
  "Be prepared to present your work so this small group can perform or experience it directly.",
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
