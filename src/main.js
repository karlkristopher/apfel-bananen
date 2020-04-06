const game = new Game ();

function preload () {
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
  }

