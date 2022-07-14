import { Color } from "three";
import Colors from "../../data/Colors";
import Logic from "../../data/Logic";

type handleMoveType = (triangle: any) => void;
const handleMove: handleMoveType = (triangle) => {
  const moveAvailable =
    Logic.availableMoves.filter((move) => {
      return move.index === triangle.userData.index;
    }).length > 0;
  if (!moveAvailable) return;

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
  // console.log(Logic.checkers);

  // animation
  Logic.selectedChecker.userData.setPosition(triangle.userData.fieldPosition);
  Logic.selectedChecker.userData.isSelected = false;
  Logic.selectedChecker = undefined;
};

export default handleMove;
