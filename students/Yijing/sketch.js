let allText = [
  "Yijing",
  "This is your Assignment 2 prompt",
  "I was so intrigued by your response to assignment #1!",
  "blank",
  "I appreciated the way you used the simple gesture of eye movement to communicate the behavior of human mirroring",
  "Do you find that technology causes you to mirror those you follow?",
  "For assignment #2, I would like you to further explore this kind of behavior chain and systems of casue and effect.",
  "if(humans do this)then{What will happen next}",
  "Consider using interaction as a tool in your work",
  "What kind of behaviors can you compell the audience to perform?",
  "We will be sharing assignment #2 in small critique groups on October 27th",
  "Be prepared to present your work so this small group can perform or experience it directly.",
  "Consider media like websites, phone applications, browser plugins, board games, toys etc",
  "A link or documentation of your work should be uploaded to canvas to receive credit",
  "click, touch, speak, listen, look, press, shake, run, wait...",
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
