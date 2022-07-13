import Logic from "../../data/Logic";

type handleErrorsType = () => void;
const handleErrors: handleErrorsType = () => {
  if (!Logic.selectedChecker) {
    console.log("Checker not selected");
    return;
  }

  if (Logic.diceNumbers.length === 0) {
    console.log("Dice not thrown");
    return;
  }
};

export default handleErrors;
