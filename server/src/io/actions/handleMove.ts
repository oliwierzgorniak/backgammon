import { Socket } from "socket.io";
import redis from "../../clients/redis";
import isMoveAllowed from "./handleMove/isMoveAllowed";

export default function handleMove(socket: Socket) {
  socket.on("handle-move", async (move: Move) => {
    const username = socket.handshake.auth.username as string;

    if (!isMoveAllowed(username, move)) {
      console.error("invalid move");
      return;
    }
  });
}
