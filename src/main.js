const game = new Game();

const dots1 = [];
const boxes = [];
const lineDisplay = [];
let clicks = [];

function preload() {
  game.init();
}

function setup() {
  createCanvas(1000, 1000);

  game.setup();
}

function draw() {
  clear();
  game.display();
}

function mousePressed() {
  dots1.forEach(function (dot, index) {
    let d = dist(mouseX, mouseY, dots1[index].x, dots1[index].y);

    if (d < dotDiameter / 2 && clicks.length === 0) {
      clicks.push({ x1: dots1[index].x, y1: dots1[index].y });
    } else if (d < dotDiameter / 2 /*&& ADD DISTANCE PARAMETER HERE*/) {
      clicks.push({ x2: dots1[index].x, y2: dots1[index].y });
    }

    if (clicks.length === 2) {
      game.lines.newLine(
        clicks[0].x1,
        clicks[0].y1,
        clicks[1].x2,
        clicks[1].y2
      );
      clicks = [];
    }
  });

  boxes.forEach(function (box) {
    let lineCount = lineDisplay.forEach(function (line) {
      console.log(line.midPointX, line.midPointY);
    });
  });
}
