export default function isYvalid(
  move: Move,
  checkersPositions: CheckersPositions,
  checkerColor: number
) {
  if (move.to.area === "board") {
    const stack = checkersPositions.board[move.to.x];
    if (move.to.y > 5) return false;
    if (stack.length === 0 && move.to.y !== 0) return false;
    if (
      stack.length > 0 &&
      checkerColor === stack[0] &&
      move.to.y !== stack.length
    )
      return false;
    if (stack.length === 1 && checkerColor !== stack[0] && move.to.y !== 0)
      return false;
  }

  if (move.to.area === "bar") {
    if (checkersPositions.bar[checkerColor].length !== move.to.y) return false;
  }

  return true;
}
