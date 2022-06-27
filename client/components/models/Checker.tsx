import BoardData from "../../data/Board";
import Colors from "../../data/Colors";

import handleChecker from "../../logic/handleChecker";

interface Props {
  x: number;
  z: number;
  color: number;
  index: number;
  level: number;
}

const Checker = ({ x, z, color, index, level }: Props) => {
  return (
    <mesh position={[x, 0, z]} userData={{ index: index, level: level, color: color }} onClick={handleChecker}>
      <cylinderGeometry args={[BoardData.checkerR, BoardData.checkerR, BoardData.checkerHeight, 25]} />
      <meshToonMaterial color={color === 0 ? Colors.checker0[0] : Colors.checker1[0]} />
    </mesh>
  );
};

export default Checker;
