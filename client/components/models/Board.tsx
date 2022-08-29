import BoardSurface from "./Board/BoardSurface";
import Stand from "./Board/Stand";

const Board = () => {
  return (
    <group>
      <BoardSurface />
      <Stand />
    </group>
  );
};

export default Board;
