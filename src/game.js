class Dot {

    constructor(x, y) {
        this.x = x;
        this.y = y;

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
            image(this.player1img, this.x, this.y, 96)
        }

        if(this.fullBoxP2 = true){
            image(this.player2img, this.x, this.y, 96)
        }

        score.draw();
    }
}


class Game {

    constructor () {
    }

    init () {
        this.background = new Background();
        this.lines = new Lines();
        this.box = new Box();
    
        
    }

    setup () {

            for(let x = 108; x <= 432; x+=108) {
                dots1.push(new Dot(this.x = x, this.y = 108))
                boxes.push(new Box(this.x = x + 54, this.y = 162))
            }
        
            for(let x = 108; x <= 432; x+=108) {
                dots1.push(new Dot(this.x = x, this.y = 216))
                boxes.push(new Box(this.x = x + 54, this.y = 270))
            }
        
            for(let x = 108; x <= 432; x+=108) {
                dots1.push(new Dot(this.x = x, this.y = 324))
                boxes.push(new Box(this.x = x + 54, this.y = 378))
            }
        
            for(let x = 108; x <= 432; x+=108) {
                dots1.push(new Dot(this.x = x, this.y = 432))
            }

            score = new Score();
            
    }
    

    display () {
        clear();
        this.box.display();
        this.background.drawBorder();

      //Display Apple/Banana Image
        boxes.forEach(ele => {
        if(ele.fullBoxP1 === true) {
            image(ele.player1img, (ele.x - 55), (ele.y - 55), 114, 114);
            

        }

        if(ele.fullBoxP2 === true) {
            image(ele.player2img, (ele.x - 45), (ele.y - 45), 90, 90);   
        }
        })


        //Display Dots
        
        dots1.forEach(ele => {
            let c = color(0, 0, 0);
            fill(c);
            circle(ele.x, ele.y, dotDiameter)
        }); 

        clicks.forEach(click =>{
            let c = color(0, 0, 0);
            fill(c);
            circle(click.x, click.y, dotDiameter+4)


        })

        this.lines.display();
        
    }

}

