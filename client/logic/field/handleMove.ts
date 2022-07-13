import Logic from "../../data/Logic";

type handleMoveType = (triangle: any) => void;
const handleMove: handleMoveType = (triangle) => {
  const moveAvailable =
    Logic.availableMoves.filter((move) => {
      return move.index === triangle.userData.index;
    }).length > 0;
  if (!moveAvailable) return;

  Logic.selectedChecker.userData.setPosition(triangle.userData.fieldPosition);
};

export default handleMove;
