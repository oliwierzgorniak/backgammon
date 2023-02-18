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
    const getValidationValue = (n: number) =>
      checkerColor === 0 ? n - 1 : 23 - (n - 1);

    const diceMatched = !!diceNumbers.find(
      (n) => getValidationValue(n) === move.to.x
    );
    if (!diceMatched) return false;
  }

  if (move.to.area === "out") {
    const getValidationValue = (n: number) =>
      checkerColor === 0 ? 23 - (n - 1) : n - 1;

    const diceMatched = !!diceNumbers.find(
      (n) => move.to.x !== getValidationValue(n)
    );
    if (!diceMatched) return false;
  }

  return true;
}
