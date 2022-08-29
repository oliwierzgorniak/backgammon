import { Shape } from "three";

// data
import BoardData from "../../../../data/Board";
import Colors from "../../../../data/Colors";
import fieldSchema from "../../../../data/schemas/field";
import handleField from "../../../../logic/handleField";

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

type getFieldPositionType = (index: number, isLevel0: boolean) => [number | undefined, number, number];
const getFieldPosition: getFieldPositionType = (index, isLevel0) => {
  let x;
  if (index >= 0 && index <= 5) {
    x =
      -index * BoardData.fieldWidth -
      BoardData.fieldWidth / 2 +
      BoardData.fieldWidth * 6 +
      BoardData.xSeperationWidth / 2;
  } else if (index >= 6 && index <= 11) {
    x = -(index - 6) * BoardData.fieldWidth - BoardData.fieldWidth / 2 - BoardData.xSeperationWidth / 2;
  } else if (index >= 12 && index <= 17) {
    x =
      (index - 12) * BoardData.fieldWidth +
      BoardData.fieldWidth / 2 -
      BoardData.fieldWidth * 6 -
      BoardData.xSeperationWidth / 2;
  } else if (index >= 18 && index <= 23) {
    x = (index - 18) * BoardData.fieldWidth + BoardData.fieldWidth / 2 + BoardData.xSeperationWidth / 2;
  }

  const z = isLevel0
    ? -BoardData.fieldHeight + BoardData.checkerR - BoardData.ySeperationHeight / 2
    : BoardData.fieldHeight - BoardData.checkerR + BoardData.ySeperationHeight / 2;

  return [x, 0, z];
};

///////////////////////////////

interface Props {
  index: number;
  x: number;
  y: number;
  isLevel0: boolean;
  isRight: boolean;
}
const Field = ({ index, x, y, isLevel0, isRight }: Props) => {
  return (
    <object3D name={String(index)} onClick={handleField}>
      {fieldSchema.map((points, i) => {
        const shape = getShape(points);
        const correction = getCorrection(isLevel0, isRight);
        const rotation = getRotation(isLevel0);
        const fieldPosition = getFieldPosition(index, isLevel0);

        return (
          <mesh
            userData={{ index: index, fieldPosition: fieldPosition }}
            rotation={[rotation.x, rotation.y, rotation.z]}
            position={[x + correction.x, y + correction.y, correction.z]}
            key={`triangle${i}`}
          >
            <shapeGeometry args={[shape]} />
            <meshToonMaterial color={i === 0 || i === 3 ? Colors.triangle0[0] : Colors.triangle1[0]} />
          </mesh>
        );
      })}
    </object3D>
  );
};

export default Field;
