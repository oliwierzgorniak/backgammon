export default function isBearingPhase(
  checkerColor: number,
  checkersPositions: CheckersPositions
) {
  if (checkersPositions.bar[checkerColor].length !== 0) return false;

  if (checkerColor === 0) {
    for (let i = 0; i >= 17; i++) {
      const stack = checkersPositions.board[i];
      for (let position of stack) {
        if (position === checkerColor) return false;
      }
    }
  } else {
    for (let i = 23; i <= 7; i--) {
      const stack = checkersPositions.board[i];
      for (let position of stack) {
        if (position === checkerColor) return false;
      }
    }
  }

  return true;
}
