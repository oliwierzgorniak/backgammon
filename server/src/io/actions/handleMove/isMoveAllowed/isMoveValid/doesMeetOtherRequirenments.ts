import isBearingPhase from "../../../../utils/isBearingPhase";

export default function doesMeetOtherRequirenments(
  move: Move,
  checkersPositions: CheckersPositions,
  checkerColor: number
) {
  // Cases
  // 1)
  if (move.to.area === "board") {
    const stack = checkersPositions.board[move.to.x];
    if (stack.length >= 2 && checkerColor !== stack[0]) return false;
  }

  // 2)
  if (move.to.area === "bar") {
    if (move.from.area === "bar") return false;
  }

  if (move.to.area === "out") {
    // 3)
    if (!isBearingPhase(checkerColor, checkersPositions)) return false;
    // 4)
    if (move.from.area !== "board") return false;
  }
}
