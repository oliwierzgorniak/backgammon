import BoardData from "../Board";

type checkersType = { id: number; position: { index: number; level: number }; color: number; x: number; z: number }[];

const bottomLevel0 = BoardData.fieldHeight + BoardData.ySeperationHeight / 2 - BoardData.checkerR;
const topLevel0 = -bottomLevel0;

const checkers: checkersType = [
  {
    id: 0,
    position: { index: 5, level: 0 },
    color: 1,
    x: 1 * BoardData.fieldWidth + BoardData.xSeperationWidth / 2 - BoardData.fieldWidth / 2,
    z: topLevel0,
  },
  {
    id: 1,
    position: { index: 5, level: 1 },
    color: 1,
    x: 1 * BoardData.fieldWidth + BoardData.xSeperationWidth / 2 - BoardData.fieldWidth / 2,
    z: topLevel0 + 1 * (BoardData.checkerR * 2 + BoardData.checkerMargin),
  },
  // { id: 1, position: { index: 5, level: 1 }, color: 2 },
  // { id: 2, position: { index: 5, level: 2 }, color: 2 },
  // { id: 3, position: { index: 5, level: 3 }, color: 2 },
  // { id: 4, position: { index: 5, level: 4 }, color: 2 },
  // { id: 5, position: { index: 7, level: 0 }, color: 2 },
  // { id: 6, position: { index: 7, level: 1 }, color: 2 },
  // { id: 7, position: { index: 7, level: 2 }, color: 2 },
  // { id: 8, position: { index: 12, level: 0 }, color: 2 },
  // { id: 9, position: { index: 12, level: 1 }, color: 2 },
  // { id: 10, position: { index: 12, level: 2 }, color: 2 },
  // { id: 11, position: { index: 12, level: 3 }, color: 2 },
  // { id: 12, position: { index: 12, level: 4 }, color: 2 },
  // { id: 13, position: { index: 23, level: 0 }, color: 2 },
  // { id: 14, position: { index: 23, level: 1 }, color: 2 },

  {
    id: 15,
    position: { index: 0, level: 0 },
    color: 0,
    x: 6 * BoardData.fieldWidth + BoardData.xSeperationWidth / 2 - BoardData.fieldWidth / 2,
    z: topLevel0,
  },
  {
    id: 16,
    position: { index: 0, level: 1 },
    color: 0,
    x: 6 * BoardData.fieldWidth + BoardData.xSeperationWidth / 2 - BoardData.fieldWidth / 2,
    z: topLevel0 + 1 * (BoardData.checkerR * 2 + BoardData.checkerMargin),
  },
  // { id: 15, position: { index: 0, level: 0 }, color: 1 },
  // { id: 16, position: { index: 0, level: 1 }, color: 1 },
  // { id: 17, position: { index: 11, level: 0 }, color: 1 },
  // { id: 18, position: { index: 11, level: 1 }, color: 1 },
  // { id: 19, position: { index: 11, level: 2 }, color: 1 },
  // { id: 20, position: { index: 11, level: 3 }, color: 1 },
  // { id: 21, position: { index: 11, level: 4 }, color: 1 },
  // { id: 22, position: { index: 16, level: 0 }, color: 1 },
  // { id: 23, position: { index: 16, level: 1 }, color: 1 },
  // { id: 24, position: { index: 16, level: 2 }, color: 1 },
  // { id: 25, position: { index: 18, level: 0 }, color: 1 },
  // { id: 26, position: { index: 18, level: 1 }, color: 1 },
  // { id: 27, position: { index: 18, level: 2 }, color: 1 },
  // { id: 28, position: { index: 18, level: 3 }, color: 1 },
  // { id: 29, position: { index: 18, level: 4 }, color: 1 },
];

export type { checkersType };
export default checkers;
