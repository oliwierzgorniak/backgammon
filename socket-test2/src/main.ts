import "./style.css";
import { io } from "socket.io-client";

async function main() {
  const socket = io("ws://localhost:3000");

  socket.auth = { username: "oliwier2" };
  socket.connect();

  socket.emit("find-opponent");

  socket.on("opponent-found", () => {
    console.log("opponent-found");
  });
  socket.on("you-start", () => {
    console.log("you-start");
  });
}

main();
