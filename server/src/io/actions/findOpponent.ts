import { Socket } from "socket.io";
import redis from "../../clients/redis";
import initiateGame from "./findOpponent/initiateGame";
import joinPlayers from "./findOpponent/joinPlayers";

export default function findOpponent(socket: Socket) {
  socket.on("find-opponent", async () => {
    const username = socket.handshake.auth.username as string | undefined;
    if (!username) {
      console.error("!username is true");
      return;
    }
    const searchingPlayersJSON = await redis.get("searching-players");

    if (!searchingPlayersJSON) {
      await redis.set("searching-players", JSON.stringify([username]));
    } else {
      await joinPlayers(searchingPlayersJSON, username);
      await initiateGame(username);
    }
  });
}
