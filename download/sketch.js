function setup() {
  const assignment = JSON.parse(localStorage.getItem("prompts"));
  createCanvas(400, 400);
  background(255);
  textSize(20);
  text(
    "Please check your downloads folder for the file: 'assignmnt2.txt'",
    width / 4,
    height / 3,
    width / 2
  );

  saveStrings(assignment, "assignment2.txt");
}
