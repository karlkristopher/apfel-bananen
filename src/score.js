class Score {
    constructor() {
        this.scoreTextX = 530;
        this.scoreTextY = 915;
        this.winX = 100;
        this.winY = 950;         
    }

    draw () {
   

            textFont('monospace')
            

         //Apple Score
        let scoreText = `Apples Bananas `
        textSize(40)
        text(scoreText, this.scoreTextX, this.scoreTextY, 300, 200);

        let scoreNum = `${player1Score} ${player2Score}`
        text(scoreNum, this.scoreTextX + 230, this.scoreTextY, 10, 100);


        //Turn

        if (player1Score + player2Score === 9) {
            if(player1Score > player2Score) {
                textSize(50)
                text(`Apples Win`, this.winX, this.winY)
                textSize(30)
                text('Click Here to Play Again', this.winX, this.winY + 50, 260, 100)
            }

            if(player1Score < player2Score) {
                textSize(50)
                text(`Bananas Win`, this.winX, this.winY)
                textSize(30)
                text('Refresh Page to Play Again', this.winX, this.winY + 50, 260, 100)
            }} else

        if(player1Turn === true) {
           text('Turn: Apple', 100, 970)
        } else {
            text('Turn: Banana', 100, 970)
        }
        
    }
}