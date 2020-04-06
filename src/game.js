
class Game {
    init () {
        this.background = new Background();
        this.dot = new Dot();
        this.lines = new Lines();
    }

    setup () {
        this.dot.setup(2, 2); // Can be changed in to make the board larger
        this.lines.setup();
    
    }

    display () {

        this.background.drawBorder();
        this.dot.display();


       
    }
}

