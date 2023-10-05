let allText = [
  "Ben",
  "This is your Assignment 2 prompt",
  "I was so intrigued by your response to assignment #1!",
  "blank",
  "It has been interesting to observe you explore to links /pathways between biological phenomena and digital systems",
  "Consider more deeply what meaning these relationships hold for you.",
  "For this assignment I would like you to craft a pathway between a biological system and the internet.",
  "How does the biological buffer between uploading and dowloading?",
  "In your work, think about how the impacts of life, death, light, and darkness can be experienced or manipulated by the world wide web.",
  "Is there internet of thing ecosystem for you to insert yourself within?",
  "Be prepared to present your work so this small group can perform or experience your work directly.",
  "We will be sharing assignment #2 in small critique groups on October 27th",
  "Consider media like websites, phone applications, browser plugins, solar servers etc",
  "A link or documentation of your work should be uploaded to canvas to receive credit",
  "Feel out how the timeline of a natural system influences the audience's experience of the work.",
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
