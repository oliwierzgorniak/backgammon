import Logic from "../data/Logic";

import handleSelection from "./checker/handleSelection";

type handleFieldType = (e: any) => void;
const handleField: handleFieldType = (e) => {
  let field = e.object;

  if (!Logic.selectedChecker) return;
};

export default handleField;
