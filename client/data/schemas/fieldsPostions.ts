import BoardData from "../Board";

interface iFieldsPositions {
  x: number;
  y: number;
}

const yTopLevel0 = BoardData.fieldHeight + BoardData.ySeperationHeight / 2;
const yBottomLevel0 = -BoardData.ySeperationHeight / 2;

const fieldsPostions: iFieldsPositions[] = [
  { x: 6 * BoardData.fieldWidth + BoardData.xSeperationWidth / 2 - BoardData.fieldWidth, y: yTopLevel0 },
  { x: 5 * BoardData.fieldWidth + BoardData.xSeperationWidth / 2 - BoardData.fieldWidth, y: yTopLevel0 },
  { x: 4 * BoardData.fieldWidth + BoardData.xSeperationWidth / 2 - BoardData.fieldWidth, y: yTopLevel0 },
  { x: 3 * BoardData.fieldWidth + BoardData.xSeperationWidth / 2 - BoardData.fieldWidth, y: yTopLevel0 },
  { x: 2 * BoardData.fieldWidth + BoardData.xSeperationWidth / 2 - BoardData.fieldWidth, y: yTopLevel0 },
  { x: 1 * BoardData.fieldWidth + BoardData.xSeperationWidth / 2 - BoardData.fieldWidth, y: yTopLevel0 },
  ///
  { x: -1 * BoardData.fieldWidth - BoardData.xSeperationWidth / 2, y: yTopLevel0 },
  { x: -2 * BoardData.fieldWidth - BoardData.xSeperationWidth / 2, y: yTopLevel0 },
  { x: -3 * BoardData.fieldWidth - BoardData.xSeperationWidth / 2, y: yTopLevel0 },
  { x: -4 * BoardData.fieldWidth - BoardData.xSeperationWidth / 2, y: yTopLevel0 },
  { x: -5 * BoardData.fieldWidth - BoardData.xSeperationWidth / 2, y: yTopLevel0 },
  { x: -6 * BoardData.fieldWidth - BoardData.xSeperationWidth / 2, y: yTopLevel0 },
  //////////////////////////////////////////
  { x: -6 * BoardData.fieldWidth - BoardData.xSeperationWidth / 2, y: yBottomLevel0 },
  { x: -5 * BoardData.fieldWidth - BoardData.xSeperationWidth / 2, y: yBottomLevel0 },
  { x: -4 * BoardData.fieldWidth - BoardData.xSeperationWidth / 2, y: yBottomLevel0 },
  { x: -3 * BoardData.fieldWidth - BoardData.xSeperationWidth / 2, y: yBottomLevel0 },
  { x: -2 * BoardData.fieldWidth - BoardData.xSeperationWidth / 2, y: yBottomLevel0 },
  { x: -1 * BoardData.fieldWidth - BoardData.xSeperationWidth / 2, y: yBottomLevel0 },
  ///
  { x: 1 * BoardData.fieldWidth + BoardData.xSeperationWidth / 2 - BoardData.fieldWidth, y: yBottomLevel0 },
  { x: 2 * BoardData.fieldWidth + BoardData.xSeperationWidth / 2 - BoardData.fieldWidth, y: yBottomLevel0 },
  { x: 3 * BoardData.fieldWidth + BoardData.xSeperationWidth / 2 - BoardData.fieldWidth, y: yBottomLevel0 },
  { x: 4 * BoardData.fieldWidth + BoardData.xSeperationWidth / 2 - BoardData.fieldWidth, y: yBottomLevel0 },
  { x: 5 * BoardData.fieldWidth + BoardData.xSeperationWidth / 2 - BoardData.fieldWidth, y: yBottomLevel0 },
  { x: 6 * BoardData.fieldWidth + BoardData.xSeperationWidth / 2 - BoardData.fieldWidth, y: yBottomLevel0 },
];
export default fieldsPostions;
