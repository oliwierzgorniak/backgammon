// import { Color } from "three";
// import Colors from "../../data/Colors";
// import Board from "../../data/Board";
// import Logic from "../../data/Logic";
import handleCapturingChecker from "./handleCapture/handleCapturingChecker";
import handleCapturedChecker from "./handleCapture/handleCapturedChecker";

type handleMoveType = (triangle: any) => void;
const handleMove: handleMoveType = (triangle) => {
  handleCapturedChecker(triangle);
  handleCapturingChecker(triangle);
};

export default handleMove;
