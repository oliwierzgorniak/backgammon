import Logic from "../data/Logic";
import handleErrors from "./field/handleErrors";
import handleMove from "./field/handleMove";

type handleFieldType = (e: any) => void;
const handleField: handleFieldType = (e) => {
  e.stopPropagation();

  handleErrors();

  let field = e.object;
  handleMove(field);
};

export default handleField;
