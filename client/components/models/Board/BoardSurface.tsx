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
        return (
          <Field
            index={i}
            x={p.x}
            y={p.y}
            isLevel0={i < 12}
            isRight={(i >= 0 && i <= 5) || (i >= 18 && i <= 23)}
            key={`field${i}`}
          />
        );
      })}
      {separationsX.map((x, i) => (
        <SeperationY x={x} key={`separation${i}`} />
      ))}
    </group>
  );
};

export default BoardSurface;
