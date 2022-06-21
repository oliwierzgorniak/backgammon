import BoardData from "../Board";

const width = BoardData.fieldWidth;
const height = BoardData.fieldHeight;

interface iField {
  x: number;
  y: number;
}

const field: iField[][] = [
  [
    { x: 0, y: 0 },
    { x: 0, y: -height },
    { x: width, y: -height },
  ],
  [
    { x: 0, y: 0 },
    { x: width, y: -height },
    { x: width, y: 0 },
  ],
  [
    { x: width, y: 0 },
    { x: width * 2, y: 0 },
    { x: width, y: -height },
  ],
  [
    { x: width * 2, y: 0 },
    { x: width * 2, y: -height },
    { x: width, y: -height },
  ],
];

export default field;
