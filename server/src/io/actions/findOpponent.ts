import { Socket } from "socket.io";
import redis from "../../clients/redis";
import joinPlayers from "./findOpponent/joinPlayers";

export default function findOpponent(socket: Socket) {
  socket.on("find-opponent", async () => {
    const username = socket.handshake.auth.username as string;
    const searchingPlayersJSON = await redis.get("searching-players");

    if (!searchingPlayersJSON) {
      redis.set("searching-players", JSON.stringify([username]));
    } else {
      joinPlayers(searchingPlayersJSON, username);
    }
  });
}
