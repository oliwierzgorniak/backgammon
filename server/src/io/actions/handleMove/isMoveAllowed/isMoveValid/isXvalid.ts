export default function isXvalid(
  move: Move,
  diceNumbers: number[],
  checkerColor: number
) {
  // excluding move not matching dice
  if (move.from.area === "board" && move.to.area === "board") {
    if (checkerColor === 0) {
      if (move.to.x - move.from.x !== diceNumbers[0]) {
        if (diceNumbers.length < 1) return false;
        if (move.to.x - move.from.x !== diceNumbers[1]) return false;
      }
    }

    if (checkerColor === 1) {
      if (move.from.x - move.to.x !== diceNumbers[0]) {
        if (diceNumbers.length < 1) return false;
        if (move.from.x - move.to.x !== diceNumbers[1]) return false;
      }
    }
  }

  if (move.from.area === "bar" && move.to.area === "board") {
    if (checkerColor === 0) {
      if (move.to.x !== diceNumbers[0] - 1) {
        if (diceNumbers.length < 1) return false;
        if (move.to.x !== diceNumbers[1] - 1) return false;
      }
    }

    if (checkerColor === 1) {
      if (move.to.x !== 23 - (diceNumbers[0] - 1)) {
        if (diceNumbers.length < 1) return false;
        if (move.to.x !== 23 - (diceNumbers[1] - 1)) return false;
      }
    }
  }

  return true;
}
