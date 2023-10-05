let allText = [
  "Zhomi",
  "This is your Assignment 2 prompt",
  "I was so intrigued by your response to assignment #1!",
  "blank",
  "It was ver engaging to see the way you approached representation, identity, and world building in such a cinematic way.",
  "In what ways do you find yourself performing identity online",
  "For this assignment I would like you to build an experience of another world using creative code.",
  "In what ways do you feel that our perceptions of the future are shaped by our technology?",
  "Consider the role that your audience plays in the world you create. What consequences will their movement, clicks, or patience produce?",
  "How can you shift our focus regarding what is possible within our view of reality?",
  "We will be sharing assignment #2 in small critique groups on October 27th",
  "Be prepared to present your work so this small group can perform or experience it directly.",
  "Consider media like websites, phone applications, browser plugins, board games, toys etc",
  "A link or documentation of your work should be uploaded to canvas to receive credit",
  "Consider the environmental impact of media like websites, phone applications, browser plugins, board games, toys etc",
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
