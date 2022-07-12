type handleErrorsType = (selectedChecker: any, diceNumbers: number[]) => void;
const handleErrors: handleErrorsType = (selectedChecker, diceNumbers) => {
  if (!selectedChecker) {
    console.log("Checker not selected");
    return;
  }

  if (diceNumbers.length === 0) {
    console.log("Dice not thrown");
    return;
  }
};

export default handleErrors;
