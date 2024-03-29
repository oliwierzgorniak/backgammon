import { Server } from "socket.io";
import http from "http";

export default function setupAndGetIo(server: http.Server) {
  return new Server(server, {
    cors: {
      origin: "*",
      credentials: true,
    },
  });
}
