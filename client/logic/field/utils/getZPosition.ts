import Board from "../../../data/Board";

type getZPositionType = (level: number, z0: number) => number;
const getZPosition: getZPositionType = (level, z0) => {
  if (z0 < 0) {
    return z0 + level * (Board.checkerR * 2 + Board.checkerMargin);
  } else {
    return z0 - level * (Board.checkerR * 2 + Board.checkerMargin);
  }
};

export default getZPosition;
