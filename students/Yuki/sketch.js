let allText = [
  "Yuki",
  "This is your Assignment 2 prompt",
  "I appreciate the delicate consideration you approached the first assignment for this class with.",
  "It was so fascinating to witness the response of delight and fascination the class gave from the gesture.",
  "From a small and simple movement, you generated a complex range of reactions in the room.",
  "This assignment is an invitation to further experiment with motion and abstraction...",
  "For this assignment #2 I would like you to play in the browser. Use a creative code library like p5js or Hydra to experiment with compositon, movement, and feeling.",
  "Consider using the practice of writing code as a pathway to finding new feelings.",
  "Try to be open to an open ended outcome.",
  "I would like you present your work as a live website or as a video screen captured from your experimentation",
  "You can use any tools or processes you would like.",
  "Challenge yourself to find provocative combinations of color, sound, texture, and motion in this digital space.",
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
