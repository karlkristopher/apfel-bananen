//Constants

const colWidth = 60; //Column Width
const dotDiameter = 12;


class Background {

//Game Border - make border dynamic based on dot size?
    drawBorder() {
        strokeWeight(4); 
        line(0, 36, 0, 660);
        strokeWeight(2); 
        line(0, 33, 540, 33);
        strokeWeight(4); 
        line(540, 36, 540, 660);
        strokeWeight(4); 
        line(0, 660, 540, 660);
        strokeWeight(1); 
        line(60, 522, 480, 522);
        
    }

}