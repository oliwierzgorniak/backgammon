import Logic from "../../data/Logic";

type handleErrorsType = () => void;
const handleErrors: handleErrorsType = () => {
  // console.log(Logic.selectedChecker);
  if (!Logic.selectedChecker) {
    throw new Error("Checker not selected");
  }

  if (Logic.diceNumbers.length === 0) {
    throw new Error("Dice not thrown");
  }
};

export default handleErrors;
