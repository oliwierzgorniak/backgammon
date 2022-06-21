// data
import BoardData from "../../../data/Board";
import Colors from "../../../data/Colors";

const Stand = () => {
  return (
    <mesh>
      <boxGeometry args={[BoardData.boardWidth, BoardData.boardHeight, BoardData.boardDepth]} />
      <meshToonMaterial color={Colors.board[0]} />
    </mesh>
  );
};

export default Stand;
