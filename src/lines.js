class Lines {
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.midPointX =
      this.x1 === this.x2
        ? this.x1
        : this.x2 > this.x1
        ? this.x2 - 54
        : this.x1 - 54;
    this.midPointY =
      this.y1 === this.y2
        ? this.y1
        : this.y2 > this.y1
        ? this.y2 - 54
        : this.y1 - 54;
  }

  display() {
    lineDisplay.forEach((ele) => {
      strokeWeight(2);
      line(ele.x1, ele.y1, ele.x2, ele.y2);
    });
  }

  newLine(x1, y1, x2, y2) {
    lineDisplay.push(new Lines(x1, y1, x2, y2));
    midpointCheck(
      lineDisplay[lineDisplay.length - 1].midPointX,
      lineDisplay[lineDisplay.length - 1].midPointY
    );
  }
}
