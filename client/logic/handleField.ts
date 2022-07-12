import Logic from "../data/Logic";
import handleErrors from "./field/handleErrors";

type handleFieldType = (e: any) => void;
const handleField: handleFieldType = (e) => {
  e.stopPropagation();

  handleErrors(Logic.selectedChecker, Logic.diceNumbers);

  let field = e.object;
};

export default handleField;
