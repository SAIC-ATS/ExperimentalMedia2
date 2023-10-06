let allText = [
  "Laura",
  "This is your Assignment 2 prompt",
  "I was so intrigued by your response to assignment #1!",
  "blank",
  "I appreciated the way you explored a new process and was fascinated by the experience of listening to all the layers of translation.",
  "I could have kept listening to the outcomes of you process for a long while...",
  "For your second assignment, I would like you to create a new work that transforms a dataset into a new form.",
  "Think carefully about what data source you would like to use. ",
  "The data could be something you create yourself (sleep logs, conversation transcripts, last year's taxes...) or something you source elsewhere (weather data, arrest records, user interaction behavior...)",
  "If you need help working with a dataset that interests you, feel free to set up a meeting to explore what strategies you can research.",
  "Be prepared to present your work so this small group can perform or experience your work directly.",
  "We will be sharing assignment #2 in small critique groups on October 27th",
  "Challenge your self to approach the act of translating data into new form as a material that can be bent, molded and adhered to other media.",
  "A link or documentation of your work should be uploaded to canvas to receive credit",
  "dont forget to document along the way!",
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
