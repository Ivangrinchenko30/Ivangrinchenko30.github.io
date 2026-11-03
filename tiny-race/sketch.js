let racerXs = [30, 61, 30,30];
let startY = 50;
let yStep = 60;
let finishX = 500;

function setup() {
  createCanvas(600, startY + yStep * racerXs.length);
}

function draw() {
  background(240);
  line(finishX, 0, finishX, height);
  for (let i = 0; i < racerXs.length; i++) {
    let y = startY + yStep * i;
    if (racerXs[i] < finishX) {
      racerXs[i] += random(1, 10);
    }
    if (keyIsPressed) {
       text('Poof',100,100);
      racerXs(-10);
  
    }
      circle(racerXs[i], y, 24);
    
  }
}