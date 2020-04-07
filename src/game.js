class Dot {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.clicked = false;

    }}

class Box {

    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.player1img = loadImage('assets/—Pngtree—apple red fruit commercial element_4037323.png');
        this.player2img = loadImage('assets/—Pngtree—summer fruit cartoon banana_3979229.png');
        this.fullBoxP1 = false; //Used for scoring
        this.fullBoxP2 = false;
        this.lineCount = 0;
    }

    display (){

        if(this.fullBoxP1 === true){
            console.log('player 1 point')
            image(this.player1img, this.x, this.y, 160)
        }

        if(this.fullBoxP2 = true){
            image(this.player2img, this.x, this.y, 160)
        }

       /*  if(player1Turn = true){
            document.getElementsById("playerturn").innerHTML = 'hi'
        } */
    

        //Can winning image go here?
    }
}


class Game {
    init () {
        this.background = new Background();
            //Question - why does lines need to be preloaded if they are being added after the game loads?
        this.lines = new Lines();
        this.box = new Box();
        
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
        this.box.display();
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

