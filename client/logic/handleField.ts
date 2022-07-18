import Logic from "../data/Logic";
import handleErrors from "./handleField/handleErrors";
import handleMove from "./handleField/handleMove";
import handleCapture from "./handleField/handleCapture";
import handleCheckersInFinalInc from "./handleField/utils/handleCheckersInFinalInc";

type handleTriangleType = (e: any) => void;
const handleTriangle: handleTriangleType = (e) => {
  e.stopPropagation();

  try {
    handleErrors();
  } catch (err) {
    console.error(err);
    return;
  }

  let triangle = e.object;

  const move = Logic.availableMoves.filter((m) => {
    return m.index === triangle.userData.index;
  })[0];

  if (!move) return;
  handleCheckersInFinalInc(move.index);

  if (move && move.type === "move") {
    handleMove(triangle);
  } else if (move && move.type === "capture") {
    handleCapture(triangle);
  }
};

export default handleTriangle;
