import Logic from "../data/Logic";
import findAvailableMoves from "./checker/findAvailableMoves";

import handleSelection from "./checker/handleSelection";

// // redux
// import { useDispatch, useSelector } from "react-redux";
// import { set } from "../redux/reducers/selectedChecker";
// import store from "../redux/store";

type handleCheckerType = (e: any) => void;
const handleChecker: handleCheckerType = (e) => {
  e.stopPropagation();
  let checker = e.object;

  handleSelection(checker);
  findAvailableMoves(checker.userData.color, checker.userData.index);
};

export default handleChecker;
