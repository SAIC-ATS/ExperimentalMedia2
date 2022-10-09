let allText = [
  "Lula",
  "This is your Assignment 2 prompt",
  "I appreciated the ambitioun and careful consideration for how you drew connection across sound, movement and text in your first assignment.",
  "I was struck by loops of various methods of looking the audience became entangled in.",
  "Where does the act of looking fit within your artistic practice?",
  "This is an invitation for you to deepen your exploration how meaning is produced across multiple modes of production",
  "For this assignment #2 I would like you to create a work that utilizes the practice of 'searching'",
  "What are the various methodologies you use to search through, within, or beneath a digital file?",
  "What practices of searching do we perform in our daily rituals?.",
  "Create a work that utilizes web languages as medium for your exploration.",
  "You can use any tools or processes you would like. Be mindful of how you would like to guide an audience through a new experience of looking.",
  "I would like you to challenge yourself to bend your own expectations of how you think a webpage should be used. ",
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
