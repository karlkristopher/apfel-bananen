

class Lines {

    constructor (x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.midPointX = (this.x1 === this.x2) ? this.x1 : (this.x2 > this.x1) ? (this.x2 - 90) : (this.x1 - 90);
        this.midPointY = (this.y1 === this.y2) ? this.y1 : (this.y2 > this.y1) ? (this.y2 - 90) : (this.y1 - 90);
        

    }

    display() {
        lineDisplay.forEach(ele => {
            strokeWeight(4); 
            line(ele.x1, ele.y1, ele.x2, ele.y2);
        })
        
    }

    newLine (x1, y1, x2, y2){
            
            lineDisplay.push(new Lines(x1, y1, x2, y2));
            midpointCheck(lineDisplay[lineDisplay.length-1].midPointX, lineDisplay[lineDisplay.length-1].midPointY);
            console.log(`is it player 1 turn? ${player1Turn}`)
            }
        

    
}



//Things to consider
//does line exist? - store all lines in an array and cross reference
//is it adjacent? 
//is it not diagonal? - should be able to do these two with an if statement with a minimum line length
//What player drew the line?

