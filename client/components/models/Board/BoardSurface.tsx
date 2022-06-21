// data
import BoardData from "../../../data/Board";
import Colors from "../../../data/Colors";
import fieldsPostions from "../../../data/schemas/fieldsPostions";
import Field from "./board-surface/Field";

const BoardSurface = () => {
  return (
    <group>
      {fieldsPostions.map((p, i) => {
        return <Field x={p.x} y={p.y} isLevel0={i < 12} key={i} />;
      })}
    </group>
  );
};

export default BoardSurface;
