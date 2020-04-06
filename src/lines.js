const lineDisplay = [];
console.log(lineDisplay);
//Question - why does this populate on line 25 but not above?

class Lines {

    constructor (x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    display() {
        lineDisplay.forEach(ele => {
            line(ele.x1, ele.y1, ele.x2, ele.y2);
        })
        
    }

    newLine (x1, y1, x2, y2){
        console.log('hello')
        lineDisplay.push(new Lines(x1, y1, x2, y2));

        console.log(lineDisplay)
    }

}

//Things to consider
//does line exist? - store all lines in an array and cross reference
//is it adjacent? 
//is it not diagonal? - should be able to do this two with an if statement that makes sure the other dot is close enough and H/V.

