import { Server } from "socket.io";
import findOpponent from "./actions/findOpponent";

export default function ioHandler(io: Server) {
  io.on("connection", (socket) => {
    console.log(socket.handshake.auth.username + " joined");

    findOpponent(socket);
  });
}
