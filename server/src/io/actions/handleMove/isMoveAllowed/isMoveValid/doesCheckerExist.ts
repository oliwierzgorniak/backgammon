export default function doesCheckerExist(
  move: Move,
  checkersPositions: CheckersPositions,
  checkerColor: number
) {
  const { x, y, area } = move.from;
  const checker = checkersPositions[area][x][y];
  const doesColorMatchAndCheckerExist = checker === checkerColor;
  return doesColorMatchAndCheckerExist;
}
