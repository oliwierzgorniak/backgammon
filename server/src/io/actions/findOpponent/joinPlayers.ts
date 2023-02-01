import redis from "../../../clients/redis";
import { io } from "../../../index";
import sendToOpponent from "../../utils/sendToOpponent";

export default async function joinPlayers(
  searchingPlayersJSON: string,
  player1: string
) {
  const searchingPlayers = JSON.parse(searchingPlayersJSON) as string[];

  // TODO many players mechanism
  const player0 = searchingPlayers[0];

  await redis.set(player0 + "-opponent", player1);
  await redis.set(player1 + "-opponent", player0);
  await redis.del("searching-players");
  await sendToOpponent(player1, "opponent-found");

  const player1SocketId = await redis.get(player1 + "-socket-id");
  if (!player1SocketId) {
    console.error("player1SocketId is null");
    return;
  }
  io.to(player1SocketId).emit("opponent-found");
}
