import BoardData from "../../data/Board";
import Colors from "../../data/Colors";

interface Props {
  x: number;
  z: number;
  isColor0: boolean;
}

const Checker = ({ x, z, isColor0 }: Props) => {
  return (
    <mesh position={[x, 0, z]}>
      <cylinderGeometry args={[BoardData.checkerR, BoardData.checkerR, BoardData.checkerHeight, 25]} />
      <meshToonMaterial color={Colors.triangle0[0]} />
    </mesh>
  );
};

export default Checker;
