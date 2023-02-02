import { io } from "../..";
import redis from "../../clients/redis";
import sendToOpponent from "./sendToOpponent";

export default async function endTurn(currentPlayer: string) {
  const player0SocketId = await redis.get(currentPlayer + "-socket-id");

  if (!player0SocketId) {
    console.error("player0SocketId is null");
    return;
  }

  io.to(player0SocketId).emit("turn-ended");

  await redis.set(currentPlayer + "-is-roll-available", "false");
  await redis.set(currentPlayer + "-n-of-available-moves", "0");

  sendToOpponent(currentPlayer, "your-turn");
}
