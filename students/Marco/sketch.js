let allText = [
  "Marco",
  "This is your Assignment 2 prompt",
  "I was so intrigued by your response to assignment #1!",
  "blank",
  "I appreciate the way you worked with intersections of risk, image, animation, and site",
  "There was a violence to the way the red graphic seemed to slice across the portraits, and I was left wondering about how these frames animate as pedestrians walk by or care drive past these images.",
  "For your second assignment, I would like you to guide an audience through an online scavenger hunt",
  "Consider what it means to scavange through the internet.",
  "Challenge yourself to present familiar online spaces as a stage for your own narrative.",
  "Be tactical in your approach to marking your online territory. Web wheatpaste; google earth graffiti; Sattelite soapbox",
  "Be prepared to present your work so this small group can perform or experience your work directly.",
  "We will be sharing assignment #2 in small critique groups on October 27th",
  "What role do you play as a guide? A mentor? A trickster? An apartition hidden behind a hyperlink?",
  "A link or documentation of your work should be uploaded to canvas to receive credit",
  "Feel free to explore creative code tools we present in class, or follow your impulse to alternative modes of producing online content.",
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
