import Logic from "../data/Logic";
import handleErrors from "./field/handleErrors";
import handleMove from "./field/handleMove";

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
  console.log(Logic.checkers[triangle.userData.index]);
  handleMove(triangle);
};

export default handleTriangle;
