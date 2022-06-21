import { Color, Shape } from "three";

// data
import Colors from "../../../../data/Colors";
import fieldSchema from "../../../../data/schemas/field";

interface iProps {
  x: number;
  y: number;
}

const Field = () => {
  return (
    <group>
      {fieldSchema.map((points, i) => {
        const p = points;
        let shape = new Shape();
        shape.moveTo(p[0].x, p[0].y);
        shape.lineTo(p[1].x, p[1].y);
        shape.lineTo(p[2].x, p[2].y);

        return (
          <mesh key={i}>
            <shapeGeometry args={[shape]} />
            <meshToonMaterial color={i === 0 || i === 3 ? Colors.triangle1[0] : Colors.triangle2[0]} />
          </mesh>
        );
      })}
    </group>
  );
};

export default Field;
