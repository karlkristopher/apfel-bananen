const game = new Game();

const dots1 = [];
const boxes = [];
const lineDisplay = [];
let scoredBox = [];
let clicks = [];
let player1Turn = true;
let player1Score = 0;
let player2Score = 0;


function preload() {
  game.init();
}

function setup() {
  createCanvas(900, 1100);

  game.setup();
}

function draw() {
  if (game.start) {
  game.display();
  } else{
    fill("green");
  }


}

function mousePressed() {


  //Draw Line


dots1.forEach(function (dot, index) {
    let d = dist(mouseX, mouseY, dots1[index].x, dots1[index].y);
    

    if (d < dotDiameter && clicks.length === 0) {
      clicks.push({ x: dots1[index].x, y: dots1[index].y });
    } else if (d < dotDiameter /*&& ADD DISTANCE PARAMETER HERE*/) {
      clicks.push({ x: dots1[index].x, y: dots1[index].y });
    }
    if (clicks.length === 2) {
      let lineDistance = dist(clicks[0].x, clicks[0].y, clicks[1].x, clicks[1].y);
      console.log(lineDistance)
      if((clicks[0].x === clicks[1].x && clicks[0].y === clicks[1].y) || lineDistance > 180 ) {
        console.log(lineDistance)

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
    let lineDistance = 90;
    let d = dist(midPointX, midPointY, box.x, box.y);
      if(d === lineDistance) {
        box.lineCount++;
      }


  //Scores point to proper player and doubles scoring player's turn.

      if(box.lineCount === 4 && scoredBox.indexOf(box) === -1) {

        if(boxCount === 2){
          console.log('box count is 1')
        }
        //console.log(box)
        //console.log(scoredBox);
        scoredBox.push(box);

        if(player1Turn === true && boxCount ===1) {
          
          box.fullBoxP2 = true;
          player2Score++
          boxCount++;  
          console.log('player 1 round 2')
          return player1Turn = true;
          } else if (player1Turn === false && boxCount === 1) {
          box.fullBoxP1 = true;
          player1Score++;
          boxCount++;
          console.log('player 2 round 2')
           return player1Turn = false; 
          }

        if(player1Turn === true) {
        box.fullBoxP1 = true;
        player1Score++
        console.log('player 1 round 1')
        boxCount++;

        return player1Turn = false;
        } else
        box.fullBoxP2 = true;
        player2Score++;
        console.log('player 2 round 1')
        boxCount++;


        return player1Turn = true;
      }
  });
  console.log(boxCount)
  console.log(`player1score: ${player1Score} player2score: ${player2Score} `)

  
  return player1Turn = !player1Turn;



}

