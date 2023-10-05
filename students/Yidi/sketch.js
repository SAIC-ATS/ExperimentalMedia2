let allText = [
  "Yidi",
  "This is your Assignment 2 prompt",
  "I appreciated the way you earnestly exposed a moment of failure for assignment #1",
  "Moments like these are fascinating in how they shape what feels possible or impossible in our practices",
  "What currently feels impossibly possible?",
  "This is an invitation for you to deepen your exploration of error, possibility, and the body",
  "For this assignment #2 I would like you to create a new work that is 'born' from your physical body",
  "Allow this assignment to offer another pathway into the research you are doing towards your pregnancy simulation",
  "Consider what kind of digital beings could germinate from your body if given the right conditions.",
  "I would like you collect some form of data or digital waste that your body produces and nurture them through web languages to rear a new digital being",
  "You can use any tools or processes you would like, but consider those that seem most appropriat for a utero application",
  "Challenge yourself to avoid any extraneous humor or sillyness in your execution. Take yourself and your offspring seriously",
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
