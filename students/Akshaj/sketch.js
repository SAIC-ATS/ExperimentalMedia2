let allText = [
  "Akshaj",
  "This is your Assignment 2 prompt",
  "For this assignment I would like you to explore creative code to create a new work that distorts a material truth.",
  "blank",
  "do you ever feel deceived by technology?",
  "How can a perceptions of a pespective be shifted by a system of rules?",
  "In what ways can you use interaction to conjure a confrontation with the sublime?",
  "Consider your relationship to randomness and chance.",
  "Your prompt for this assignment is to create a performance online without the use of a camera",
  "Challenge yourself to create a system of cause and effect that guides your viewer where you would like them to go.",
  "Be thoughtful about how you present TRUTH in this context.",
  "We will be sharing assignment #2 in small critique groups on October 27th",
  "Consider media like websites, scavenger hunts, memes, hyperlinks, boardgames, browser plugins, solar servers etc",
  "A link or documentation of your work should be uploaded to canvas to receive credit",
  "Think about the ideal way a person finds themselves as audience member for this performance.",
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
