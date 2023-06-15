export default function isXvalid(
  move: Move,
  diceNumbers: number[],
  checkerColor: number
) {
  // excluding move not matching dice
  if (move.from.area === "board" && move.to.area === "board") {
    const validationValue =
      checkerColor === 0 ? move.to.x - move.from.x : move.from.x - move.to.x;

    const diceMatched = !!diceNumbers.find((n) => validationValue === n);
    if (!diceMatched) return false;
  }

  if (move.from.area === "bar" && move.to.area === "board") {
    function getValidationValue(n: number) {
      return checkerColor === 0 ? n - 1 : 23 - (n - 1);
    }
    const diceMatched = !!diceNumbers.find(
      (n) => getValidationValue(n) === move.to.x
    );
    if (!diceMatched) return false;
  }

  if (move.to.area === "out") {
    function getValidationValue(n: number) {
      return checkerColor === 0 ? 23 - (n - 1) : n - 1;
    }

    const diceMatched = !!diceNumbers.find(
      (n) => move.to.x !== getValidationValue(n)
    );
    if (!diceMatched) return false;
  }

  // validating if checker is on ther right bar
  if (move.to.area === "bar" && move.from.x !== checkerColor) return false;

  return true;
}
