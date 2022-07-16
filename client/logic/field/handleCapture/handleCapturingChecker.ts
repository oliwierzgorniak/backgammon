import { Color } from "three";
import Logic from "../../../data/Logic";
import Colors from "../../../data/Colors";
import getZPosition from "../utils/getZPosition";

type handleCapturingCheckerType = (triangle: any) => void;
const handleCapturingChecker: handleCapturingCheckerType = (triangle) => {
  // deselecting
  const cColor = Logic.selectedChecker.userData.color;
  Logic.selectedChecker.material.color = new Color(cColor === 0 ? Colors.checker0[0] : Colors.checker1[0]);

  // logic
  const index = Logic.selectedChecker.userData.index;
  const level = Logic.selectedChecker.userData.level;
  const fieldArr = Logic.checkers[index];
  Logic.checkers[index] = fieldArr.slice(0, level);
  const newLevel = 0;
  Logic.selectedChecker.userData.setLevel(newLevel);
  Logic.selectedChecker.userData.setIndex(triangle.userData.index);
  Logic.checkers[triangle.userData.index].push(Logic.selectedChecker);

  // animation
  let position = triangle.userData.fieldPosition;
  position[2] = getZPosition(newLevel, position[2]);
  Logic.selectedChecker.userData.setPosition(position);
  Logic.selectedChecker.userData.isSelected = false;
  Logic.selectedChecker = undefined;
};

export default handleCapturingChecker;
