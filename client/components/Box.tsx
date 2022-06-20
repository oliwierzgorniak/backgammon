import BoardData from "../data/Board";

const Box = () => {
  return (
    <mesh>
      <boxGeometry />
      <meshBasicMaterial color={BoardData.boardColor} />
    </mesh>
  );
};

export default Box;
