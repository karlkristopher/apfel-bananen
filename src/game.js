class Dot {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.clicked = false;
        
    }}

class Box {

    constructor (x, y) {
        this.x1 = x;
        this.y1 = y;
        this.player1img = //p1img; // insert player 1 graphic
        this.player2img = //p2img; // insert player 2 graphic
        this.fullBox = false;
    }

    display (){
        //Can we put winning image here?
    }
}


class Game {
    init () {
        this.background = new Background();
            //Question - why does lines need to be preloaded if they are being added after the game loads?
        this.lines = new Lines();
        
    }

    setup () {

            //Extra row of column but should not matter right now.
            for(let x = 180; x <= 720; x+=180) {
                dots1.push(new Dot(this.x = x, this.y = 180))
                boxes.push(new Box(this.x = x + 90, this.y = 270))
            }
        
            for(let x = 180; x <= 720; x+=180) {
                dots1.push(new Dot(this.x = x, this.y = 360))
                boxes.push(new Box(this.x = x + 90, this.y = 450))
            }
        
            for(let x = 180; x <= 720; x+=180) {
                dots1.push(new Dot(this.x = x, this.y = 540))
                boxes.push(new Box(this.x = x + 90, this.y = 630))
            }
        
            for(let x = 180; x <= 720; x+=180) {
                dots1.push(new Dot(this.x = x, this.y = 720))
            }

    }
    

    display () {
        clear();
        this.background.drawBorder();


        //Display Dots
        dots1.forEach(ele => {
            let c = color(0, 0, 0); //question - how can I put this in constants?
            fill(c);
            circle(ele.x, ele.y, dotDiameter)
        }); 

        this.lines.display();
        
    }

}

