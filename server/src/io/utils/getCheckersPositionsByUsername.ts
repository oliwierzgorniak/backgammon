import redis from "../../clients/redis";

export default async function getCheckersPositionsByUsername(username: string) {
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

  return checkersPositions;
}
