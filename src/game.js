
class Game {
    init () {
        this.background = new Background();
        this.dot = new Dot();
        this.lines = new Lines();
        
    }

    setup () {
        this.dot.setup(3, 3); 
     //   this.lines.setup();
    
    }

    display () {
        clear();
        this.background.drawBorder();
        this.dot.display();
        this.lines.display();

       
    }

    clicked() {
      // this.dots.clicked();
  
    }
}

