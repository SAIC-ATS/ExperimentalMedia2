let allText = [
  "Gabe",
  "This is your Assignment 2 prompt",
  "I appreciated the tensions between real time and captured audio you used in assignment #1",
  "I was struck by process by which a material was produced to then begin the labor of composing...",
  "What role does recurssive processing or labor play in your practice?",
  "This is an invitation for you to deepen your exploration of generative and emergent forms a material for composing something new",
  "For this assignment #2 I would like you to adopt a daily practice working with webcode",
  "Don't fall into traps of scope creep and over ambition. Find a methodoplgy of crafting generative media that can be worked with quickly and simply.",
  "Through this daily practice, try to build a sensibilty for qualities of what is being produced in the media.",
  "Formally, I would like you to use web languages as medium for your exploration, although the final form can be any media of your choosing.",
  "You can use any tools or processes you would like, but I encourage you to think about how generative systems originating from the internet differ from those that can be created on your local machine.",
  "Challenge yourself to commit to a practice that can weave itself into your lifestyle for a short period of time. Give yourself room to reflect upon how the practice, in addition to the material produces meaning in the final compiled work.",
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
