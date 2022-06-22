import BoardData from "../../data/Board";
import Colors from "../../data/Colors";

interface Props {
  x: number;
  z: number;
  isColor0: boolean;
  index: number;
  level: number;
}

const Checker = ({ x, z, isColor0, index, level }: Props) => {
  return (
    <mesh
      position={[x, 0, z]}
      userData={{ index: index, level: level }}
      onClick={(something) => {
        console.log(something.eventObject.userData);
      }}
    >
      <cylinderGeometry args={[BoardData.checkerR, BoardData.checkerR, BoardData.checkerHeight, 25]} />
      <meshToonMaterial color={isColor0 ? Colors.checker0[0] : Colors.checker1[0]} />
    </mesh>
  );
};

export default Checker;
