import redis from "../../../clients/redis";
import isMoveValid from "./isMoveAllowed/isMoveValid";

export default async function isMoveAllowed(username: string, move: Move) {
  const nOfAvailableMoves = await redis.get(username + "-n-of-available-moves");

  if (!nOfAvailableMoves || +nOfAvailableMoves === 0) {
    console.error("no available moves");
    return false;
  }

  if (!isMoveValid(move)) {
  }
}
