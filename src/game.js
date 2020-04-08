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
        //image(this.player2img, 0, 0)
    

        if(this.fullBoxP1 === true){            
            image(this.player1img, this.x, this.y, 160)
        }

        if(this.fullBoxP2 = true){
            image(this.player2img, this.x, this.y, 160)
        }

        score.draw();

       /*  if(player1Turn = true){
            document.getElementsById("playerturn").innerHTML = 'hi'
        } */
    

        //Can winning image go here?
    }
}


class Game {

    constructor () {
        this.start = true;

    }

    init () {
        this.background = new Background();
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

            score = new Score();
    }
    

    display () {
        clear();
        this.box.display();
        this.background.drawBorder();
      
        boxes.forEach(ele => {
            
            if(ele.fullBoxP1 === true) {
                image(ele.player1img, (ele.x - 92), (ele.y - 92), 190, 190);
                

            }

            if(ele.fullBoxP2 === true) {
                image(ele.player2img, (ele.x - 75), (ele.y - 75), 150, 150);   
            }
        })


        //Display Dots
        dots1.forEach(ele => {
            let c = color(0, 0, 0); //question - how can I put this in constants?
            fill(c);
            circle(ele.x, ele.y, dotDiameter)
        }); 

        this.lines.display();
        
    }

}

