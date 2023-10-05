let allText = [
  "Korina",
  "This is your Assignment 2 prompt",
  "I appreciated the direct approach and playfulness you used in your first assignment",
  "It made me think about the complexities of language and what creative opportunitites there may be for trans-human polylingualism",
  "Do you feel this captures the core interests of your work?",
  "This is an invitation for you to deepen your exploration of 3D artificats...",
  "For this assignment #2 I would like you use an online environment to challenge an audience's relationship to physical objects",
  "How do 3D models, avatars, or digital distortions, reflect something new about a physical origin?",
  "Or rather, what can physical objects say to us about a digital doppleganger?",
  "I would like you to use the form of the website as medium for your exploration",
  "You can use any tools or processes you would like.",
  "Challenge yourself to bend your own expectations of how you use the digital and the physical in tandem.",
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
