import Logic from "../data/Logic";

type handleCheckersInFinalIncType = (index: number, color: number) => void;
const handleCheckersInFinalInc: handleCheckersInFinalIncType = (index, color) => {
  const isUsersChecker = color === Logic.usersColor;
  const isPositionInFinalZone = Logic.usersColor === 0 ? index >= 17 : index <= 5;

  if (isUsersChecker && isPositionInFinalZone) {
    Logic.checkersInFinalZone++;
  }
};

export default handleCheckersInFinalInc;
