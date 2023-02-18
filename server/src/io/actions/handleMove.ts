import { Socket } from "socket.io";
import sendToOpponent from "../utils/sendToOpponent";
import isMoveAllowed from "./handleMove/isMoveAllowed";
import reduceNofAvailableMoves from "./handleMove/reduceNofAvailableMoves";
import saveNewCheckersPositions from "./handleMove/saveNewCheckersPositions";

export default async function handleMove(socket: Socket) {
  socket.on("handle-move", async (move: Move) => {
    const username = socket.handshake.auth.username as string;

    if (!isMoveAllowed(username, move)) {
      console.error("invalid move");
      return;
    }

    await reduceNofAvailableMoves(username);

    await saveNewCheckersPositions(username, move);
    await sendToOpponent(username, "opponent-moved", [move]);
  });
}
