import { Color, Shape } from "three";

// data
import BoardData from "../../../../data/Board";
import Colors from "../../../../data/Colors";
import fieldSchema from "../../../../data/schemas/field";

interface iProps {
  x: number;
  y: number;
  isLevel0: boolean;
}

function getCorrection(isLevel0: boolean) {
  if (isLevel0) {
    return { x: 0, y: -(BoardData.fieldHeight + BoardData.ySeperationHeight / 2), z: 0 };
  } else {
    return {
      x: BoardData.fieldWidth,
      y: BoardData.ySeperationHeight / 2,
      z: 2 * BoardData.fieldHeight + BoardData.ySeperationHeight,
    };
  }
}

const Field = ({ x, y, isLevel0 }: iProps) => {
  return (
    <group>
      {fieldSchema.map((points, i) => {
        const p = points;
        let shape = new Shape();
        shape.moveTo(p[0].x, p[0].y);
        shape.lineTo(p[1].x, p[1].y);
        shape.lineTo(p[2].x, p[2].y);

        const corretionL0 = { x: 0, y: -(BoardData.fieldHeight + BoardData.ySeperationHeight / 2), z: 0 };
        // const rotationCorretionL1 = { y: -(BoardData.fieldHeight + BoardData.ySeperationHeight / 2) };
        const corretionL1 = {
          x: BoardData.fieldWidth,
          y: BoardData.ySeperationHeight / 2,
          z: 2 * BoardData.fieldHeight + BoardData.ySeperationHeight,
        };
        const correction = isLevel0 ? corretionL0 : corretionL1;

        const rotationL0 = { x: -Math.PI / 2, y: 0, z: 0 };
        const rotationL1 = { x: Math.PI / 2, y: Math.PI, z: 0 };
        const r = isLevel0 ? rotationL0 : rotationL1;

        return (
          <mesh rotation={[r.x, r.y, r.z]} position={[x + correction.x, y + correction.y, correction.z]} key={i}>
            <shapeGeometry args={[shape]} />
            <meshToonMaterial color={i === 0 || i === 3 ? Colors.triangle1[0] : Colors.triangle2[0]} />
          </mesh>
        );
      })}
    </group>
  );
};

export default Field;
