let txt = "";
let btn = "SAVE ME!";
const assignment = JSON.parse(localStorage.getItem("prompts"));

function setup() {
  createCanvas(400, 400);
  let button = createButton(btn);
  button.position(width / 2 - 50, height / 2 + 50);
  button.mousePressed(saveMe);
  textSize(20);
}

function draw() {
  background(255, 200, 100);
  text(txt, width / 4, height / 3, width / 2);
}

function saveMe() {
  txt = "Please check your downloads folder for the file: 'assignmnt2.txt'";
  if (btn == "close") {
    window.self.close();
  }
  saveStrings(assignment, "assignment2.txt");
  btn = "close";
}
