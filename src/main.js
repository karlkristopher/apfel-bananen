const game = new Game();

const dots1 = [];
const boxes = [];
const lineDisplay = [];
let clicks = [];
let player1Turn = true;
let player1Score = 0;
let player2Score = 0;


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


  //Draw Line


dots1.forEach(function (dot, index) {
  //console.log(player1Turn)
    let d = dist(mouseX, mouseY, dots1[index].x, dots1[index].y);

    if (d < dotDiameter && clicks.length === 0) {
      clicks.push({ x: dots1[index].x, y: dots1[index].y });
    } else if (d < dotDiameter /*&& ADD DISTANCE PARAMETER HERE*/) {
      clicks.push({ x: dots1[index].x, y: dots1[index].y });
    }
    if (clicks.length === 2) {
      if(clicks[0].x === clicks[1].x && clicks[0].y === clicks[1].y) {
        return clicks = [];
      } else
      game.lines.newLine(
        clicks[0].x,
        clicks[0].y,
        clicks[1].x,
        clicks[1].y
      );
      clicks = [];
    }
  });

  

}
  //Check for completed Box

function midpointCheck(midPointX, midPointY) {
  boxes.forEach(function (box) {
    let lineDistance = 90;
    let d = dist(midPointX, midPointY, box.x, box.y);
      if(d === lineDistance) {
        box.lineCount++;
      }


  //Scores point to proper player and doubles scoring player's turn.
  //STILL NEED TO FIGURE OUT SCORING - SORTED BOXES ARE BEING COUNTED BECAUSE OF THE LOOP.
//COULD PUSH BOXED ITEMS INTO A NEW ARRAY AND THEN EXCLUDE?
      if(box.lineCount === 4) {
        console.log(box)
        if(player1Turn === true) {
        box.fullBoxP1 = true;
        player1Score++
        return player1Turn = false;
        } else
        box.fullBoxP2 = true;
        player2Score++;
        return player1Turn = true;
      }
  });


  //console.log(boxes[0])

  return player1Turn = !player1Turn;

}



