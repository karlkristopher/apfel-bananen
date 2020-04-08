//Constants

const colWidth = 100; //Column Width
const dotDiameter = 28;


class Background {

//Game Border - make border dynamic based on dot size?
    drawBorder() {
        strokeWeight(7); 
        line(0, 55, 0, 1100);
        strokeWeight(5); 
        line(0, 50, 900, 50);
        strokeWeight(7); 
        line(900, 55, 900, 1100);
        strokeWeight(7); 
        line(0, 1100, 1000, 1100);
        strokeWeight(1); 
        line(100, 870, 800, 870);
        
    }

}