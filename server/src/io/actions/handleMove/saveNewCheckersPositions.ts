import redis from "../../../clients/redis";

export default async function saveNewCheckersPositions(
  username: string,
  move: Move
) {
  const gameId = await redis.get(username + "-current-game");
  if (gameId === null) {
    console.error("gameId is null");
    return;
  }

  const checkersPositionsJSON = await redis.get(gameId + "-checkers");
  if (checkersPositionsJSON === null) {
    console.error("checkersPositionsJSON is null");
    return;
  }

  const checkersPositions = JSON.parse(
    checkersPositionsJSON
  ) as CheckersPositions;

  if (move.to.area === "out") {
    checkersPositions.board[move.from.x].pop();
  } else {
    const checker = checkersPositions[move.from.area][move.from.x].pop();

    if (typeof checker === "undefined") {
      console.error("checker is undefined");
      return;
    }

    const stack = checkersPositions.board[move.to.x];
    if (move.to.area === "board" && stack.length > 0 && stack[0] !== checker) {
      // ⬆️ checker as checker color
      const capturedChecker = checkersPositions.board[move.to.x][move.to.y];
      checkersPositions.bar[capturedChecker].push(capturedChecker);
      checkersPositions.bar[move.to.x][move.to.y] = checker;
    } else {
      checkersPositions[move.to.area][move.to.x].push(checker);
    }

    await redis.set(
      gameId + "-checkers-positions",
      JSON.stringify(checkersPositions)
    );
  }
}
