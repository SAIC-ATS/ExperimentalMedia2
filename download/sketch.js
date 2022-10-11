let txt = "";
let btn = "SAVE ME!";
const assignment = JSON.parse(localStorage.getItem("prompts"));
let x, y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let button = createButton(btn);
  button.position(width / 2 - 50, height / 2 + 50);
  button.mousePressed(saveMe);
  textSize(20);
}

function draw() {
  x = map(mouseX, 0, width, 50, 200);
  y = map(mouseY, 0, height, 100, 20);
  background(255, x, y);
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
