import redis from "../../../clients/redis";
import isMoveValid from "./isMoveAllowed/isMoveValid";

export default async function isMoveAllowed(username: string, move: Move) {
  const nOfAvailableMoves = await redis.get(username + "-n-of-available-moves");

  if (nOfAvailableMoves === null) {
    console.error("nOfAvailableMoves is null");
    return;
  }

  if (+nOfAvailableMoves === 0) {
    console.error("no available moves");
    return false;
  }

  if (!isMoveValid(username, move)) return false;

  return true;
}
