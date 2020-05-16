class Score {
  constructor() {
    this.scoreTextX = 318;
    this.scoreTextY = 549;
    this.winX = 60;
    this.winY = 570;
  }

  draw() {
    textFont("monospace");
    //Apple Score
    let scoreText = `Äpfel  Bananen `;
    textSize(24);
    text(scoreText, this.scoreTextX, this.scoreTextY, 108, 120);

    let scoreNum = `${player1Score} ${player2Score}`;
    text(scoreNum, this.scoreTextX + 138, this.scoreTextY, 6, 60);

    //Turn

    if (player1Score + player2Score === 9) {
      if (player1Score > player2Score) {
        textSize(30);
        text(`Äpfel  Win`, this.winX, this.winY + 13);
        // text('Click Here to Play Again', this.winX, this.winY + 20, 200, 60)
      }

      if (player1Score < player2Score) {
        textSize(30);
        text(`Bananen Win`, this.winX, this.winY + 13);
        // text('Click Here to Play Again', this.winX, this.winY + 20, 200, 60)
      }
    } else if (player1Turn === true) {
      textSize(24);
      text("Turn: Äpfel", 60, 576);
    } else {
      textSize(24);
      text("Turn: Bananen", 60, 576);
    }

    textSize(15);
    text("=> Reset", this.winX, this.winY + 60, 200, 60);
  }
}
