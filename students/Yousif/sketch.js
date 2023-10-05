let allText = [
  "Yousif",
  "This is your Assignment 2 prompt",
  "I appreciated the ambition and curiosity withwhich you approached assgnment #1",
  "Your work reflected an interest in the aesthetics of physical phenomena and the relationship between technology and our natural world.",
  "How do you see this relationship impacting your creative practice?",
  "This is an invitation for you to deepen your exploration of phenomena and our ability to attune ourselves to natural rhythms",
  "For this assignment #2 I would like you to create a new work that explores sensing of a physical phenomena.",
  "Don't fall into traps of over thinking or scope creep. Consider what tools you have at your disposal to 'sense' from the browser window.",
  "Datasets, live streams, environmental sensores, tracking time through the rotation of the planet...",
  "Formally, I would like you to use websites and web languages as medium for your exploration",
  "You can use any tools or processes you would like and any phenomena- real time or historic",
  "Challenge yourself to identify a clear and felt poetic through your choices of the observer and the observed.",
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
