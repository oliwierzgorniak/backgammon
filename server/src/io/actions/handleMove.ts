import { Socket } from "socket.io";
import redis from "../../clients/redis";
import joinPlayers from "./findOpponent/joinPlayers";

export default function handleMove(socket: Socket) {
  socket.on("handle-move", async (move: Move) => {
    const username = socket.handshake.auth.username as string;

    if (!isMoveAllowed()) {
      console.error("invalid move");
      return;
    }
  });
}
