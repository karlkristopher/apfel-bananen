let dots = [];

class Dot {

    setup(col, row){
        let dotSetup = [];
        for (let i = 0; i <= col; i++) {
            dotSetup[i] = [];
        }

        for (let i = 0; i <= row; i++) {
            dotSetup.forEach((column, index) => column.push({ x: (index + 1)*200, y: null }));
        }
        dotSetup.map(column => {
            column.map((item, index) => {
              item.y = (index+1)*200;
            });
          });

        dotSetup.forEach(elem => elem.forEach(el => dots.push(el)))

        //Add clicked boolean
        dots.map(el => {
            el.clicked = false;
    })
    }


    display () {
        dots.forEach(ele => 
            circle(ele.x, ele.y, dotDiameter)
            );
        
    }


}
console.log(dots)

