//hit the play button in top left, then click on the white canvas to play, use arrow keys, move big circle to catch the small one

let circleX = 200;
let circleY = 200;

let dotX = 250;
let dotY = 250;
let lT = 0;

let score = 0;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  if (score <= 24) {
    if (keyIsDown(RIGHT_ARROW)) {
      circleX = circleX + 9;
    }

    if (keyIsDown(LEFT_ARROW)) {
      circleX = circleX - 9;
    }

    if (keyIsDown(UP_ARROW)) {
      circleY = circleY - 9;
    }

    if (keyIsDown(DOWN_ARROW)) {
      circleY = circleY + 9;
    }

    background(200);

    circle(circleX, circleY, 50);

    if (millis() - lT >= 2000) {
      dotX = random(0, 500);
      dotY = random(0, 500);
      lT = millis();
    }

    let distanceToDot = dist(circleX, circleY, dotX, dotY);

    if (distanceToDot < 40) {
      score = score + 1;

      dotX = random(0, 500);
      dotY = random(0, 500);
      lT = millis();
    }
    strokeWeight(10);
    point(dotX, dotY);

    strokeWeight(1);
    fill(0);
    textSize(24);
    text("The Score: " + score, 200, 20);
  } else {
    text("You Lost Geeg", 200, 250);
    stop(score);
  }
}
