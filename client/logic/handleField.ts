import Logic from "../data/Logic";
import handleErrors from "./field/handleErrors";
import handleMove from "./field/handleMove";

type handleTriangleType = (e: any) => void;
const handleTriangle: handleTriangleType = (e) => {
  e.stopPropagation();

  handleErrors();

  let triangle = e.object;
  console.log(triangle.position);
  handleMove(triangle);
};

export default handleTriangle;
