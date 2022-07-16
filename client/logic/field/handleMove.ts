import { Color } from "three";
import Colors from "../../data/Colors";
import Board from "../../data/Board";
import Logic from "../../data/Logic";

type getZPositionType = (level: number, z0: number) => void;
const getZPosition: getZPositionType = (level, z0) => {
  if (z0 < 0) {
    return z0 + level * (Board.checkerR * 2 + Board.checkerMargin);
  } else {
    return z0 - level * (Board.checkerR * 2 + Board.checkerMargin);
  }
};

type handleMoveType = (triangle: any) => void;
const handleMove: handleMoveType = (triangle) => {
  // deselecting
  const cColor = Logic.selectedChecker.userData.color;
  Logic.selectedChecker.material.color = new Color(cColor === 0 ? Colors.checker0[0] : Colors.checker1[0]);

  // move
  const cIndex = Logic.selectedChecker.userData.index;
  const cLevel = Logic.selectedChecker.userData.level;
  const fieldArr = Logic.checkers[cIndex];
  Logic.checkers[cIndex] = fieldArr.slice(0, cLevel);

  const newLevel = Logic.checkers[triangle.userData.index].length;
  Logic.selectedChecker.userData.setLevel(newLevel);
  Logic.selectedChecker.userData.setIndex(triangle.userData.index);
  Logic.checkers[triangle.userData.index].push(Logic.selectedChecker);

  // animation
  let c1position = triangle.userData.fieldPosition;
  c1position[2] = getZPosition(newLevel, c1position[2]);
  Logic.selectedChecker.userData.setPosition(c1position);
  Logic.selectedChecker.userData.isSelected = false;
  Logic.selectedChecker = undefined;
};

export default handleMove;
