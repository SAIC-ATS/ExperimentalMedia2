let allText = [
  "Yawen",
  "This is your Assignment 2 prompt",
  "I appreciated the way you were exploring how projection and performance can be used in tandem to create new meaning",
  "I was struck by how you projected the 'real' you into a virtual representation while the physical you existed in a continuous state of performance.",
  "Do you feel caught in a loop of performing the real?",
  "This is an invitation for you to deepen your exploration of how to access what is 'real' or genuine.",
  "For this assignment #2 I would like you to craft an experience that causes -you- to experience JOY",
  "Not only joy, but EXTREME JOY. UNBRIDLED JOY. MEMORABLE IMPACTFUL BEAUTIFUL JOY. This new work should be a catalyst for you, 'the real Yawen', to feel joy in real time.",
  "How can you craft an opportunity for you to experience this when you present your work? Be open to an open ended outcome.",
  "Formally, you can experiment with any media that will aid you in this pursuit of JOY.",
  "As you consider what medium you will choose, consider the possibility of how web code or digital techniques can visualize the 'inner you' to the 'outer you'.",
  "Challenge yourself to bend your own expectations of what you can cause yourself to experience through your own work.",
  "Be prepared to share your finished work to the class with as little introduction before hand as possible",
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
