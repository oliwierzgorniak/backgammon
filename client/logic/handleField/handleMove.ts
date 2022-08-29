import { Color } from "three";
import Colors from "../../data/Colors";
import Logic from "../../data/Logic";
import getZPosition from "./utils/getZPosition";

type handleMoveType = (triangle: any) => void;
const handleMove: handleMoveType = (triangle) => {
  // deselecting
  const cColor = Logic.selectedChecker.userData.color;
  Logic.selectedChecker.material.color = new Color(cColor === 0 ? Colors.checker0[0] : Colors.checker1[0]);

  // logic
  const isOnBar = typeof Logic.selectedChecker.userData.index === "undefined";
  const newLevel = Logic.checkers[triangle.userData.index].length;
  if (isOnBar) {
    const section = Logic.selectedChecker.userData.barSection;
    const level = Logic.selectedChecker.userData.barLevel;
    Logic.bar[section][level] = null;
    Logic.selectedChecker.userData.setLevel(newLevel);
    Logic.selectedChecker.userData.setIndex(triangle.userData.index);
    Logic.selectedChecker.userData.setBarLevel(undefined);
    Logic.selectedChecker.userData.setBarSection(undefined);
    Logic.checkers[triangle.userData.index].push(Logic.selectedChecker);
  } else {
    const index = Logic.selectedChecker.userData.index;
    const level = Logic.selectedChecker.userData.level;
    const fieldArr = Logic.checkers[index];
    Logic.checkers[index] = fieldArr.slice(0, level);
    Logic.selectedChecker.userData.setLevel(newLevel);
    Logic.selectedChecker.userData.setIndex(triangle.userData.index);
    Logic.checkers[triangle.userData.index].push(Logic.selectedChecker);
  }

  // animation
  let position = triangle.userData.fieldPosition;
  position[2] = getZPosition(newLevel, position[2]);
  Logic.selectedChecker.userData.setPosition(position);
  Logic.selectedChecker.userData.isSelected = false;
  Logic.selectedChecker = undefined;
};

export default handleMove;
