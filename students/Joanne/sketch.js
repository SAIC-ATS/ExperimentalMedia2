let allText = [
  "Joanne",
  "This is your Assignment 2 prompt",
  "I appreciate the ambition and courage you had to dive into AR skills with your first assignment",
  "I found your idea of new adaptations of a postcard compelling",
  "It fascinating to think through how specificity of location translate into our virtual lives",
  "This is an invitation for you to deepen your exploration of the relationships that can be built between virtual and physical sites",
  "For this assignment #2 I want you to choose a physical location from which to collect data.",
  "The form of data you collect is up to you. Consider what poetics can be built from records of what can be observed...",
  "footsteps. sirens. temperature. shadows. memories made. hearts broken.",
  "I want you to take the data you collect from this site and incorporate it into an artwork built with code in the browser",
  "You can use any tools or processes you would like, if you need suggestions feel free to explore the tools we use in class or reach out for more recommendations.",
  "How do you want to click through footsteps? Scroll through sirens? Download heat? Listen to shadows?",
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
}
