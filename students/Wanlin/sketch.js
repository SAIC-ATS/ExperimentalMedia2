let allText = [
  "Wanlin",
  "This is your Assignment 2 prompt",
  "I appreciated the subtle ways in which you challenged how we sense composition and location in your first assignment",
  "In particular, I was struck by the vantage point we had as the audience. The viewer, the listener, and the software observer.",
  "What vantage point have you crafted for compositons of these virtual cameras in your artistic practice?",
  "This is an invitation for you to deepen your exploration manipulating video or visual input",
  "For this assignment #2 I would like you to meaningfully transform survaillance of a lonley location",
  "Consider how aesthesia, synesthesia, amnesia influence how we draw meaning from a manipulated image",
  "How can real time processing challenge your own notions of an open ended outcome?",
  "Formally, I would like you to use websites and web languages as medium for your exploration",
  "You can use any tools or processes you would like.",
  "However, I would like you to challenge yourself to bend your own expectations of how you think a webpage should be used.",
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
