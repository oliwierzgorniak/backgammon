import redis from "../../clients/redis";
import { io } from "../../index";

export default async function sendToOpponent(
  username: string,
  event: string,
  payload?: any[]
) {
  const opponent = await redis.get(username + "-opponent");
  const opponentId = await redis.get(opponent + "-socket-id");

  if (!opponentId) {
    console.error("!opponentId is true");
    return;
  }

  if (payload) io.to(opponentId).emit(event, ...payload);
  else io.to(opponentId).emit(event);
}
