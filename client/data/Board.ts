class Board {
  fieldWidth: number;
  fieldHeight: number;
  boardPadding: number;
  ySeperationWidth: number;
  ySeperationHeight: number;
  xSeperationWidth: number;
  xSeperationHeight: number;
  boardWidth: number;
  boardHeight: number;
  boardDepth: number;
  checkerR: number;
  checkerHeight: number;
  checkerMargin: number;

  constructor() {
    this.fieldWidth = 3;
    this.fieldHeight = 12;
    this.boardPadding = 2;
    this.ySeperationHeight = 7;
    this.ySeperationWidth = 6 * this.fieldWidth;
    this.xSeperationHeight = 2 * this.fieldHeight + this.ySeperationHeight;
    this.xSeperationWidth = 5;
    this.boardWidth = this.ySeperationWidth * 2 + this.xSeperationWidth + this.boardPadding * 2;
    this.boardHeight = 2;
    this.boardDepth = this.xSeperationHeight + this.boardPadding * 2;
    this.checkerR = 1.2;
    this.checkerHeight = 1;
    this.checkerMargin = 0.2;
  }
}

const board = new Board();
export default board;
