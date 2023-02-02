import { io } from "../../../..";
import redis from "../../../../clients/redis";
import endTurn from "../../../utils/endTurn";
import sendToOpponent from "../../../utils/sendToOpponent";

export default async function setTimer(player0: string) {
  const previousNofMoves = await redis.get(player0 + "-n-of-moves");
  setTimeout(async () => {
    const nOfMoves = await redis.get(player0 + "-n-of-moves");

    if (!nOfMoves || !previousNofMoves) {
      console.error("nOfMoves or previousNofMoves is null");
      return;
    }

    if (nOfMoves === previousNofMoves) {
      endTurn(player0);
    }
  }, 45 * 1000);
}
