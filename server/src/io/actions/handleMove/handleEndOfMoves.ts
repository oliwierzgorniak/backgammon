import redis from "../../../clients/redis";
import sendToOpponent from "../../utils/sendToOpponent";

export default async function handleEndOfMoves(username: string) {
  const nOfAvailableMoves = await redis.get(username + "-n-of-available-moves");
  if (nOfAvailableMoves === null) {
    console.error("nOfAvailableMoves is null");
    return false;
  }
  if (+nOfAvailableMoves === 0) {
    await sendToOpponent(username, "your-turn");
  }
}
