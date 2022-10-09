let allText = [
  "Kim",
  "This is your Assignment 2 prompt",
  "I appreciated the elegance of how you positoned data and intimacy in relation within your first assignment.",
  "I was struck by the depth of conversation the class seemed ready to explore after considering how human representation is mediated through our technology",
  "What further physical sensory experiences can be teased out through this research?",
  "This assignment is an invitation to further experiment with telematic sensation...",
  "For this assignment #2 I would like you to find the boundaries of a browser window's personal space.",
  "What are the limitations of privacy, comfort, intimacy, or health that can be tested?",
  "Try to identify the poetic spaces that emerge from a browser window's bodily experience.",
  "I would like you present your work as a live website using creative code.",
  "You can use any tools or processes you would like.",
  "Challenge yourself to play with verious means of interaction. Mice, keyboards, screens, microphones...",
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
