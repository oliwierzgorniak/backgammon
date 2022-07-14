import { Color } from "three";

// data
import Colors from "../../data/Colors";
import Logic from "../../data/Logic";

type handleSelectionType = (checker: any) => void;

const handleSelection: handleSelectionType = (checker) => {
  const cIndex = checker.userData.index;
  const cLevel = checker.userData.level;
  console.log(cLevel);
  console.log(Logic.checkers[cIndex].length - 1);
  const isTop = Logic.checkers[cIndex].length - 1 === cLevel;
  if (!isTop) {
    console.log("checker not on top");
    return;
  }

  if (checker.userData.isSelected) {
    checker.userData.isSelected = false;
    Logic.selectedChecker = undefined;

    const cColor = checker.userData.color;
    checker.material.color = new Color(cColor === 0 ? Colors.checker0[0] : Colors.checker1[0]);
  } else {
    // deselecting last selected checker
    if (Logic.selectedChecker) {
      Logic.selectedChecker.userData.isSelected = false;
      const cColor = Logic.selectedChecker.userData.color;
      Logic.selectedChecker.material.color = new Color(cColor === 0 ? Colors.checker0[0] : Colors.checker1[0]);
    }

    checker.userData.isSelected = true;
    Logic.selectedChecker = checker;

    checker.material.color = new Color(Colors.checkerSelected[0]);
  }
};

export default handleSelection;
