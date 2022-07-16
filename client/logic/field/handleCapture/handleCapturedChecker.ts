import Board from "../../../data/Board";
import Logic from "../../../data/Logic";
import getZPosition from "../utils/getZPosition";

type handleCapturedCheckerType = (triangle: any) => void;
const handleCapturedChecker: handleCapturedCheckerType = (triangle) => {
  // logic
  let checker = Logic.checkers[triangle.userData.index][0];
  const index = checker.userData.index;
  const level = checker.userData.level;
  const color = checker.userData.color;
  const fieldArr = Logic.checkers[index];
  Logic.checkers[index] = fieldArr.slice(0, level);
  checker.userData.setIndex(undefined);
  checker.userData.setLevel(undefined);
  checker.userData.setBarSection(color);
  const newLevel = Logic.bar[color].length;
  checker.userData.setBarLevel(newLevel);
  Logic.bar[color].push(checker);

  // animation
  let position = [0, 0, color === 0 ? -Board.checkerR : Board.checkerR];
  position[2] = getZPosition(newLevel, position[2]);
  checker.userData.setPosition(position);
};

export default handleCapturedChecker;
