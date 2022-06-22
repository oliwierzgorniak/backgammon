// data
import BoardData from "../../../data/Board";
import Colors from "../../../data/Colors";

const Stand = () => {
  return (
    <mesh position={[0, -BoardData.boardHeight / 2 - 0.008, 0]}>
      <boxGeometry args={[BoardData.boardWidth, BoardData.boardHeight, BoardData.boardDepth]} />
      <meshToonMaterial color={Colors.board[0]} />
    </mesh>
  );
};

export default Stand;
