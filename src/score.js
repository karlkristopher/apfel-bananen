class Score {
    constructor() {
        this.scoreTextX = 318;
        this.scoreTextY = 549;
        this.winX = 60;
        this.winY = 570;         
    }

    draw () {


   

            textFont('monospace')

            
            

         //Apple Score
        let scoreText = `Apples Bananas `
        textSize(24)
        text(scoreText, this.scoreTextX, this.scoreTextY, 108, 120);

        let scoreNum = `${player1Score} ${player2Score}`
        text(scoreNum, this.scoreTextX + 138, this.scoreTextY, 6, 60);


        //Turn

        if (player1Score + player2Score === 9) {
            if(player1Score > player2Score) {
                textSize(30)
            text(`Apples Win`, this.winX, this.winY)
            textSize(22)
            text('Refresh Page to Play Again', this.winX, this.winY + 20, 200, 60)
            }

            if(player1Score < player2Score) {
                textSize(30)
                text(`Bananas Win`, this.winX, this.winY)
                textSize(22)
                text('Refresh Page to Play Again', this.winX, this.winY + 20, 200, 60)
            }} else

        if(player1Turn === true) {
           text('Turn: Apple', 60, 576)
        } else {
            text('Turn: Banana', 60, 576)
        }
        
    }
}