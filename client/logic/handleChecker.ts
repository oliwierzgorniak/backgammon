import { Color } from "three";
import Colors from "../data/Colors";

import Logic from "../data/Logic";
// // redux
// import { useDispatch, useSelector } from "react-redux";
// import { set } from "../redux/reducers/selectedChecker";
// import store from "../redux/store";

type handleCheckerType = (e: any) => void;
const handleChecker: handleCheckerType = (e) => {
  let checker = e.object;

  // let selectedChecker = store.getState().selectedChecker.value;

  if (checker.userData.isSelected) {
    checker.userData.isSelected = false;
    Logic.selectedChecker = undefined;

    const cColor = checker.userData.color;
    checker.material.color = new Color(cColor === 0 ? Colors.checker0[0] : Colors.checker1[0]);
  } else {
    if (Logic.selectedChecker) {
      const cColor = Logic.selectedChecker.userData.color;
      Logic.selectedChecker.material.color = new Color(cColor === 0 ? Colors.checker0[0] : Colors.checker1[0]);
    }

    checker.userData.isSelected = true;
    Logic.selectedChecker = checker;
    // store.dispatch(set(checker));

    checker.material.color = new Color(Colors.checkerSelected[0]);
  }
};

export default handleChecker;
