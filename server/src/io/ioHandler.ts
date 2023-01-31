import { Server } from "socket.io";
import redis from "../clients/redis";
import findOpponent from "./actions/findOpponent";

export default function ioHandler(io: Server) {
  io.on("connection", async (socket) => {
    const username = socket.handshake.auth.username;
    console.log(username + " joined");
    console.log(socket.id);

    await redis.set(username + "-socket-id", socket.id);

    findOpponent(socket);
  });
}
