let allText = [
  "Eric",
  "This is your Assignment 2 prompt",
  "I was so intrigued by your response to assignment #1!",
  "blank",
  "It was fascinating to see how your AI represented our understanding of plastic waste.",
  "I wonder now what the AI understands about its own impact on carbon emissions or plastic waste on the planet.",
  "Your assignment #2 prompt is to research the environmental impact of the technology you use",
  "Consider how the media you use in your work embeds its own meaning into your work",
  "Consider using the energy consumed by an algorithm",
  "What systems of production are required to bring a technology to your audience",
  "We will be sharing assignment #2 in small critique groups on October 27th",
  "Be prepared to present your work so this small group can perform or experience your work directly.",
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
