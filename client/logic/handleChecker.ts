import { Color } from "three";
import Colors from "../data/Colors";

type handleCheckerType = (e: any) => void;
const handleChecker: handleCheckerType = (e) => {
  let checker = e.object;

  if (checker.userData.isSelected) {
    const cColor = checker.userData.color;
    checker.material.color = new Color(cColor === 0 ? Colors.checker0[0] : Colors.checker1[0]);
    checker.userData.isSelected = false;
  } else {
    checker.userData.isSelected = true;
    checker.material.color = new Color(Colors.checkerSelected[0]);
  }
};

export default handleChecker;
