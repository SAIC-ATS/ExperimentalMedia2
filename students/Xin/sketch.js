let allText = [
  "Xin",
  "This is your Assignment 2 prompt",
  "I appreciated the elegance of how you crafted a relationship between interaction and 'seeing' in your first assignment",
  "A subtle gesture of enhancing what we choose to see by omitting everything we choose to ignore.",
  "Where can the unseen find this kind of spotlight in your work?",
  "This is an invitation for you to deepen your exploration of making the invisible visible",
  "For this assignment #2 I would like you to explore how 'nature' or the biological can be seen through creative code.",
  "Allow yourself to think about what relationships of cause and effect in our environment can directly for the logic of a browser window.",
  "Consider what capacity the machine has to observe the biological and vice versa.",
  "Formally, I would like you to use web languages as medium for your exploration and I encourage you to include elements of real time 'input' and 'output'",
  "You can use any tools or processes you would like.",
  "Challenge yourself to bend your own expectations of how you think a webpage should be used, and who should be using it.",
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
