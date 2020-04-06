const game = new Game();


function preload() {
  game.init();
}

function setup() {
  createCanvas(1000, 1000);

  game.setup();
  console.log(lineDisplay)
}

function draw() {
  clear();
  game.display();
}

function mousePressed() {
    for (let i = 0; i > dots.length; i++){
        dots[i].clicked(mouseX, mouseY);
    } 
    //if dot click is satisfied from above, draw a line using the dot's coordinates

    game.lines.newLine(100,100,200,200); //test

   // game.dot.clicked();

}


