//images included from the biodiversity heritage library https://www.biodiversitylibrary.org/page/48296678#page/1/mode/1up
//^Note how to give credit when credit is due

//Declare your variables
let img = [];
let speedX = [];
let speedY = [];
let xpos = [];
let ypos = [];
let pixColor = [];
let rand = [];
let str;
let prompt = "";

//initiate your program
function preload() {
  for (i = 1; i < 13; i++) {
    str = "assets/wc" + nf(i) + ".jpeg";
    //note how to upload images to the folder contents to the left <
    img[0] = loadImage("assets/wc14.jpeg"); //loading images.
    //Note 0 or 'null' cannot be added into the string above
    img[i] = loadImage(str);
  }
}

function setup() {
  if (localStorage.getItem("prompt10") != null) {
    prompt = localStorage.getItem("prompt10");
  } else {
    prompt = "please allow local storage";
  }

  //pixel dimensions of our canvas area
  createCanvas(windowWidth, windowHeight);
  //background rgb value
  background(245, 230, 215);
  noStroke();
  //assign values to our variables using a for loop
  for (i = 1; i < 13; i++) {
    speedX[i] = random(-5, 5); //random ranges
    speedY[i] = random(-5, 5);
    xpos[i] = width / 2; //find the center of the canvas
    ypos[i] = height / 2;
    rand[0] = random(25, 100);
    rand[i] = random(25, 100);
  }
}

function draw() {
  //for loop to create animations with each of our 14 images
  for (i = 0; i < 13; i++) {
    //create animation by incrementing our xpos and ypos variables
    xpos[i] = xpos[i] + speedX[i];
    ypos[i] = ypos[i] + speedY[i];
    //get the pixel data of our selected image
    pixColor[i] = img[i].get(xpos[i], ypos[i], rand[i], rand[i]);
    //adjust the opacity of the image
    tint(255, 15);
    imageMode(CENTER);
    //draw the image
    image(pixColor[i], xpos[i], ypos[i]);
    //change direction of image reveal once xpos and ypos values are outside the dimensions of the canvas
    if (xpos[i] >= width + 300 || xpos[i] <= 0) {
      speedX[i] = speedX[i] * -1;
    }
    if (ypos[i] >= height || ypos[i] <= 0) {
      speedY[i] = speedY[i] * -1;
    }
  }
  textSize(24);
  fill(200, 0, 100);
  text(prompt, width / 4, height / 4, width / 2);
}

function mouseClicked() {
  let button = createButton("pow!");
  button.position(width - 100, height - 20);
  button.mousePressed(terminate);
}

function terminate() {
  window.top.close();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
