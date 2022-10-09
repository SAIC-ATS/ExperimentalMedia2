let allText = [
  "Dorothy",
  "This is your Assignment 2 prompt",
  "I appreciated the tensions you built between the emotional, the logical, and the ephemeral in your first assignment.",
  "How can you expand upon this aesthetic research into the inimacy of technology and the body?",
  "Where do you see the screen positioning iteslf within your artistic practice?",
  "This is an invitation for you to deepen your exploration of typography, sound, and the human hand...",
  "For this assignment #2 I would like you to create an interactive experience that ellicits sensations of the ellicit",
  "Don't fall into traps of cleverness and one liners. Challenge for you to sincerely considering where intimacy can genuinely be felt between human and machine.",
  "Look for where the textural, the sensuous, the taboo lie hidden in the browser logic.",
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
