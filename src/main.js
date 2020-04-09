const game = new Game();

let dots1 = [];
let boxes = [];
let lineDisplay = [];
let scoredBox = [];
let clicks = [];
let player1Turn = true;
let player1Score = 0;
let player2Score = 0;
let score;


function preload() {
  game.init();
}

function setup() {
  createCanvas(540, 660);
  game.setup();
}

function draw() {
  game.display();
  
}

function mousePressed() {

  //Game Reset
  let resetClickD = dist(mouseX, mouseY, 120, 600);
  if((player1Score + player2Score === 9) && (resetClickD < 100)) {
    boxes = [];
    lineDisplay = [];
    scoredBox = [];
    clicks = [];
    player1Turn = true;
    player1Score = 0;
    player2Score = 0;
  }



  //Manage Clicked Dots
dots1.forEach(function (dot, index) {

    //Temporarily Store Clicked Dots
    let d = dist(mouseX, mouseY, dots1[index].x, dots1[index].y);
    if (d < dotDiameter && clicks.length === 0) {
      clicks.push({ x: dots1[index].x, y: dots1[index].y });
    } else if (d < dotDiameter) {
      clicks.push({ x: dots1[index].x, y: dots1[index].y });
    }

    if (clicks.length === 2) {

      let duplicateLineCheck = function (c1x, c2x, c1y, c2y) {
        let duplicate = false;

        let clickMidPointX = (c1x === c2x) ? c1x : (c2x > c1x) ? (c2x - 54) : (c1x - 54);
        let clickMidPointY = (c1y === c2y) ? c1y : (c2y > c1y) ? (c2y - 54) : (c1y - 54);
        lineDisplay.forEach(line => {
          if(clickMidPointX === line.midPointX && clickMidPointY === line.midPointY) {
            duplicate = true;
          }
        })
      
        if(duplicate === true) {
          return true;
        } else {
          return false;
        }

      } 

      //Stops duplicate lines, allows for only vertical/horizontal lines, allows for proper length of line, prevents double clicking on one dot
      let lineDistance = dist(clicks[0].x, clicks[0].y, clicks[1].x, clicks[1].y);
      if((clicks[0].x === clicks[1].x && clicks[0].y === clicks[1].y) || lineDistance > 108 || duplicateLineCheck(clicks[0].x, clicks[1].x, clicks[0].y, clicks[1].y)) {

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
  let boxCount = 0;

  boxes.forEach(function (box) {
    let lineDistance = 54;
    let d = dist(midPointX, midPointY, box.x, box.y);
      if(d === lineDistance) {
        box.lineCount++;
      }


  //Scores point to proper player and doubles scoring player's turn.

      if(box.lineCount === 4 && scoredBox.indexOf(box) === -1) {

        scoredBox.push(box);

        if(player1Turn === true && boxCount ===1) {
          
          box.fullBoxP2 = true;
          player2Score++
          boxCount++;  
          return player1Turn = true;
          } else if (player1Turn === false && boxCount === 1) {
          box.fullBoxP1 = true;
          player1Score++;
          boxCount++;
           return player1Turn = false; 
          }

        if(player1Turn === true) {
        box.fullBoxP1 = true;
        player1Score++
        boxCount++;

        return player1Turn = false;
        } else
        box.fullBoxP2 = true;
        player2Score++;
        boxCount++;


        return player1Turn = true;
      }
  });


  return player1Turn = !player1Turn;



}

