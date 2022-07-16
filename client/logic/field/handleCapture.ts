import { Color } from "three";
import Colors from "../../data/Colors";
import Board from "../../data/Board";
import Logic from "../../data/Logic";

type getZPositionType = (level: number, z0: number) => number;
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

  // move checker captured
  let checker0 = Logic.checkers[triangle.userData.index][0];
  const c0Index = checker0.userData.index;
  const c0Level = checker0.userData.level;
  const c0color = checker0.userData.color;
  const c0fieldArr = Logic.checkers[c0Index];
  Logic.checkers[c0Index] = c0fieldArr.slice(0, c0Level);
  checker0.userData.setIndex(undefined);
  checker0.userData.setLevel(undefined);
  checker0.userData.setBarSection(c0color);
  const c0newLevel = Logic.bar[c0color].length;
  checker0.userData.setBarLevel(c0newLevel);

  Logic.bar[c0color].push(checker0);

  // move checker capturing
  const c1Index = Logic.selectedChecker.userData.index;
  const c1Level = Logic.selectedChecker.userData.level;
  const c1fieldArr = Logic.checkers[c1Index];
  Logic.checkers[c1Index] = c1fieldArr.slice(0, c1Level);
  const c1newLevel = Logic.checkers[triangle.userData.index].length;
  Logic.selectedChecker.userData.setLevel(c1newLevel);
  Logic.selectedChecker.userData.setIndex(triangle.userData.index);
  Logic.checkers[triangle.userData.index].push(Logic.selectedChecker);

  // animation checker captured
  let c0position = [0, 0, c0color === 0 ? -Board.checkerR : Board.checkerR];
  c0position[2] = getZPosition(c0newLevel, c0position[2]);
  checker0.userData.setPosition(c0position);

  // animation checker capturing
  let c1position = triangle.userData.fieldPosition;
  c1position[2] = getZPosition(c1newLevel, c1position[2]);
  Logic.selectedChecker.userData.setPosition(c1position);
  Logic.selectedChecker.userData.isSelected = false;
  Logic.selectedChecker = undefined;
};

export default handleMove;
