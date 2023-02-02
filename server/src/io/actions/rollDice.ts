import { Socket } from "socket.io";
import { io } from "../..";
import redis from "../../clients/redis";
import getDiceNumber from "./rollDice/getDiceNumber";

export default async function rollDices(socket: Socket) {
  const username = socket.handshake.auth.username as string | undefined;

  if (!username) {
    console.error("!username is true");
    return;
  }

  const isRollAvailable = await redis.get(username + "-is-roll-available");
  if (!isRollAvailable || JSON.parse(isRollAvailable)) {
    console.error("isRollAvailable is null or isRollAvailble is falsy");
    return;
  }

  const dice = [getDiceNumber(), getDiceNumber()];
  await redis.set(username + "-dice", JSON.stringify(dice));

  const userSocketId = await redis.get(username + "-socket-id");
  if (!userSocketId) {
    console.error("userSocketId is null");
    return;
  }
  io.to(userSocketId).emit("dice-rolled", dice);
}
