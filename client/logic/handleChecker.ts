import Logic from "../data/Logic";

import handleSelection from "./checker/handleSelection";

// // redux
// import { useDispatch, useSelector } from "react-redux";
// import { set } from "../redux/reducers/selectedChecker";
// import store from "../redux/store";

type handleCheckerType = (e: any) => void;
const handleChecker: handleCheckerType = (e) => {
  let checker = e.object;

  handleSelection(checker);
};

export default handleChecker;
