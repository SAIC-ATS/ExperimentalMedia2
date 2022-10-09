let allText = [
  "Meiko",
  "This is your Assignment 2 prompt",
  "I appreciate the ambition and courage you had to dive into new skills with your first assignment",
  "I found your idea of connecting and interweaving different technologies and sensory experiences compelling",
  "A daisy chain of of dialog. Memories transmitting from one platform to the next.",
  "This is an invitation for you to deepen your exploration of how memory and sensation can be shaped through media and technology...",
  "For this assignment #2 I want you to make a website experience that is felt through the body.",
  "Don't fall into traps of cleverness and over ambition. Try to isolate a singular sensation that your work can provoke.",
  "Think carefully about what audience is best suited for the work. Is this a website for a mother? For an aunt?",
  "Formally, I would like you to use websites and web languages as medium for your exploration",
  "You can use any tools or processes you would like.",
  "Challenge yourself to keep the technical challenge secondary to the craft of designing an experience.",
  "Be prepared to share your finished work to the class with NO INTRODUCTION and NO EXPLANATION before hand. The work should be ready to be experienced directly.",
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
