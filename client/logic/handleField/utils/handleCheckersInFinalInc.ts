import Logic from "../../../data/Logic";

type handleCheckersInFinalIncType = (index: number) => void;
const handleCheckersInFinalInc: handleCheckersInFinalIncType = (index) => {
  const isUsersChecker = Logic.selectedChecker.userData.color === Logic.usersColor;
  const isPositionInFinalZone = Logic.usersColor === 0 ? index >= 17 : index <= 5;
  const isInFinalZone = Logic.selectedChecker.userData.isInFinalZone;

  if (isUsersChecker && isPositionInFinalZone && !isInFinalZone) {
    Logic.selectedChecker.userData.setIsInFinalZone(true);
    Logic.checkersInFinalZone++;
    console.log("checkersInFinalZone increased ", Logic.checkersInFinalZone);
  }
};

export default handleCheckersInFinalInc;
