import Logic from "../../data/Logic";

type handleMoveType = (field: any) => void;
const handleMove: handleMoveType = (field) => {
  const moveAvailable = Logic.availableMoves.filter((move) => move.index === field.userData.index).length > 0;
  if (!moveAvailable) return;
};

export default handleMove;
