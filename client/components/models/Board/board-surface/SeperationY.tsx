import BoardData from "../../../../data/Board";
import Colors from "../../../../data/Colors";

const SeperationY = ({ x }: { x: number }) => {
  return (
    <mesh position={[x, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[BoardData.ySeperationWidth, BoardData.ySeperationHeight]} />;
      <meshToonMaterial color={Colors.triangle1[0]} />
    </mesh>
  );
};

export default SeperationY;
