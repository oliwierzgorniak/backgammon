import Logic from "../../../data/Logic";

type handleCheckersInFinalDecType = (checker: any) => void;
const handleCheckersInFinalDec: handleCheckersInFinalDecType = (checker) => {
  const isUsersChecker = checker.userData.color === Logic.usersColor;
  const isCheckerInFinalZone = Logic.usersColor === 0 ? checker.userData.index >= 17 : checker.userData.index <= 5;

  if (isUsersChecker && isCheckerInFinalZone) {
    Logic.selectedChecker.userData.setIsInFinalZone(false);
    console.log(Logic.checkersInFinalZone);
    Logic.checkersInFinalZone--;
    console.log("checkersInFinalZone decreased ", Logic.checkersInFinalZone);
  }
};

export default handleCheckersInFinalDec;
