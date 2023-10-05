let allText = [
  "MJ",
  "This is your Assignment 2 prompt",
  "I was so intrigued by your response to assignment #1",
  "blank",
  "It was fascinating to see the ways you explored the potential of AI generated imagery",
  "I wondered what kind of affect you found these images to produce.",
  "How do you feel these technologies are influencing your process and practice?",
  "For this assignment I am challenging you to think critically about why it is important for you to produce",
  "Make a work that considers all aspects of its production. What economies and systems does your work depend upon? Question why is it important to you that your work collaborates with (or resists againt) these systems.",
  "Consider how your background in industry can be recontextualized by the media you choose to explore with this assignment.",
  "Be prepared to present your work so this small group can perform or experience your work directly.",
  "We will be sharing assignment #2 in small critique groups on October 27th",
  "Consider media like websites, phone applications, browser plugins, board games, toys etc",
  "A link or documentation of your work should be uploaded to canvas to receive credit",
  "Dont be afraid to bring difficult conversations to the forefront through your work.",
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
