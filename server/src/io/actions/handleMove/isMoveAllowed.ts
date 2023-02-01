import redis from "../../../clients/redis";
import isMoveValid from "./isMoveAllowed/isMoveValid";

export default async function isMoveAllowed(username: string, move: Move) {
  const availableMoves = await redis.get(username + "-available-moves");

  if (!availableMoves || +availableMoves === 0) {
    console.error("no available moves");
    return false;
  }

  if (!isMoveValid(move)) {
  }
}
