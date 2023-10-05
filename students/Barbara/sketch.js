let allText = [
  "Bárbara",
  "This is your Assignment 2 prompt",
  "I appreciated the clever entangling of media and ambition in your first assignment.",
  "I was struck by the tensions of spectacle and scale you ensnared your audience within.",
  "Where do you feel the ideal scale for your work exists?",
  "This is an invitation for you to deepen your exploration of humor and trickery...",
  "For this assignment #2 I would like you to create and artwork that FEELS BIG.",
  "This does not mean the work needs to be large in scale, but rather the work needs to assert a spectacle that dwarfs the audience.",
  "Consider the experience of fixation from an unreachable itch or watching a screensaver bounce along the edges of a monitor.",
  "Formally, I would like you to use websites and web languages as medium for your exploration",
  "You can use any tools or processes you would like.",
  "Think carefully about what emotion (or set of emotions) you would like to immerse your audience within. How can these be provoked from the browser?",
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
