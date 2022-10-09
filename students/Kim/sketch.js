let allText = [
  "Kim",
  "This is your Assignment 2 prompt",
  "I appreciate the subtle ways in which you challenged the institution of the museum in your first assignment",
  "It made me think about the practices and formal expectations of professionalization as an artist",
  "Do you feel caught in a loop of professionalization?",
  "This is an invitation for you to deepen your exploration of humor and trickery...",
  "For this assignment #2 I need like you to create something 'unprofessional'",
  "Don't fall into traps of cleverness and one liners. Challenge for you to sincerely considering what might feel risky or dangerous to the standards you hold for your work.",
  "Try to be open to an open ended outcome.",
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
  // let status = localStorage.getItem("program status");

  // if (status == "ended") {
  //   newWindow.location.replace("../../download/index.html");
  //   newWindow.moveTo(500, 200);
  //   newWindow.resizeTo(400, 450);
  //   newWindow.focus();
  // }

  // if (newWindow.closed) {
  //   localStorage.setItem("program status", "begun");
  // }
}
