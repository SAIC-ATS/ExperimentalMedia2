let allText = [
  "Jetta",
  "This is your Assignment 2 prompt",
  "I appreciated the strange familiarity I felt from your presentation for assignment #1",
  "It is curious to think about how inspiration strikes us and what conditions we need for it to germinate.",
  "How to create a new How to?",
  "This is an invitation for you to deepen your craft and exploration of media through a work where you cannot be present...",
  "For this assignment #2 I would like you to create an experience that your audience witnesses while you are not in the room.",
  "What are the systems of control, surveillance, trust, or deception needed to produce meaning?",
  "Try to be open to an open ended outcome.",
  "Formally, I would like you to use websites and web languages as medium for your exploration",
  "You can use any tools or processes you would like.",
  "What are the consequences of distance or disloaction? Challenge yourself to create a work where you are equally interested in the audience's reaction as they are in witnessing your work.",
  "Be prepared to share your finished work to the class. Remember, you cannot be there during your presentation so there can be no introduction. The audience must experience the work directly.",
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
