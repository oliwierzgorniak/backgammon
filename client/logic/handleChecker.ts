import Logic from "../data/Logic";
import findAvailableMoves from "./handleChecker/findAvailableMoves";
import handleSelection from "./handleChecker/handleSelection";

// // redux
// import { useDispatch, useSelector } from "react-redux";
// import { set } from "../redux/reducers/selectedChecker";
// import store from "../redux/store";

type handleCheckerType = (e: any) => void;
const handleChecker: handleCheckerType = (e) => {
  e.stopPropagation();
  let checker = e.object;

  handleSelection(checker);
  findAvailableMoves(checker.userData.color, typeof checker.userData.index === "undefined", checker.userData.index);
};

export default handleChecker;
