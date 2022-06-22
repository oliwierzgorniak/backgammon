import { Shape } from "three";

// data
import BoardData from "../../../../data/Board";
import Colors from "../../../../data/Colors";
import fieldSchema from "../../../../data/schemas/field";

type getShapeType = ([{ x, y }]: { x: number; y: number }[]) => Shape;
const getShape: getShapeType = (p) => {
  let shape = new Shape();
  shape.moveTo(p[0].x, p[0].y);
  shape.lineTo(p[1].x, p[1].y);
  shape.lineTo(p[2].x, p[2].y);

  return shape;
};

type getCorrectionType = (isLelvel0: boolean, isRight: boolean) => { x: number; y: number; z: number };
const getCorrection: getCorrectionType = (isLevel0, isRight) => {
  const zOffset = -(BoardData.fieldHeight + BoardData.ySeperationHeight / 2);
  // const xOffset = isRight ? -BoardData.fieldWidth / 3 : BoardData.fieldWidth / 3; // adjusting right side
  const xOffset = 0;

  let correctionL0 = { x: xOffset, y: -(BoardData.fieldHeight + BoardData.ySeperationHeight / 2), z: zOffset };
  let correctionL1 = {
    x: BoardData.fieldWidth + xOffset,
    y: BoardData.ySeperationHeight / 2,
    z: 2 * BoardData.fieldHeight + BoardData.ySeperationHeight + zOffset,
  };

  return isLevel0 ? correctionL0 : correctionL1;
};

type getRotationType = (isLevel0: boolean) => { x: number; y: number; z: number };
const getRotation: getRotationType = (isLevel0) => {
  const rotationL0 = { x: -Math.PI / 2, y: 0, z: 0 };
  const rotationL1 = { x: Math.PI / 2, y: Math.PI, z: 0 };

  return isLevel0 ? rotationL0 : rotationL1;
};

///////////////////////////////

interface Props {
  x: number;
  y: number;
  isLevel0: boolean;
  isRight: boolean;
}
const Field = ({ x, y, isLevel0, isRight }: Props) => {
  return (
    <group>
      {fieldSchema.map((points, i) => {
        const shape = getShape(points);
        const correction = getCorrection(isLevel0, isRight);
        const rotation = getRotation(isLevel0);

        return (
          <mesh
            rotation={[rotation.x, rotation.y, rotation.z]}
            position={[x + correction.x, y + correction.y, correction.z]}
            key={`triangle${i}`}
          >
            <shapeGeometry args={[shape]} />
            <meshToonMaterial color={i === 0 || i === 3 ? Colors.triangle0[0] : Colors.triangle1[0]} />
          </mesh>
        );
      })}
    </group>
  );
};

export default Field;
