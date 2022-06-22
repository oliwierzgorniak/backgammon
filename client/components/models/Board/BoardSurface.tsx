// data
import fieldsPostions from "../../../data/schemas/fieldsPostions";
import separationsX from "../../../data/schemas/seperations";

// componenets
import Field from "./board-surface/Field";
import SeperationY from "./board-surface/SeperationY";

const BoardSurface = () => {
  return (
    <group>
      {fieldsPostions.map((p, i) => {
        return <Field x={p.x} y={p.y} isLevel0={i < 12} isRight={(i >= 0 && i <= 5) || (i >= 18 && i <= 23)} key={i} />;
      })}
      {separationsX.map((x) => (
        <SeperationY x={x} />
      ))}
    </group>
  );
};

export default BoardSurface;
