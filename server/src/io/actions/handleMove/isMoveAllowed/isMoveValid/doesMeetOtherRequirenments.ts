import isBearingPhase from "../../../../utils/isBearingPhase";

export default function doesMeetOtherRequirenments(
  move: Move,
  checkersPositions: CheckersPositions,
  checkerColor: number
) {
  const stack = checkersPositions.board[move.to.x];

  if (move.to.area === "board") {
    if (stack.length >= 2 && checkerColor !== stack[0]) return false;
  }

  if (move.to.area === "bar") {
    if (move.from.area === "bar") return false;
  }

  if (move.to.area === "out") {
    if (!isBearingPhase(checkerColor, checkersPositions)) return false;
    if (move.from.area !== "board") return false;
  }
}
