let dots = [];
console.log(dots)
//question - why does dots populate on line 32 but not 2?

class Dot {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.clicked = false;
        
    }

    setup(col, row){
        let dotSetup = [];
        for (let i = 0; i <= col; i++) {
            dotSetup[i] = [];
        }

        for (let i = 0; i <= row; i++) {
            dotSetup.forEach((column, index) => column.push(new Dot((index + 1)*180, null)));                
        }

        dotSetup.map(column => {
            column.map((item, index) => {
              item.y = (index+1)*180;
            });
          });

        dotSetup.forEach(elem => elem.forEach(el => dots.push(el)))

        console.log(dots)
        
    }


    display () {
        dots.forEach(ele => {
            let c = color(0, 0, 0); //question - how can I put this in constants?
            fill(c);
            circle(ele.x, ele.y, dotDiameter)
        });
        
    }

    clicked(){
        console.log('newdot')
    }

  
}

