import { Socket } from "socket.io";
import { io } from "../..";
import redis from "../../clients/redis";
import getDiceNumber from "./rollDice/getDiceNumber";

export default async function setRollDiceListener(socket: Socket) {
  socket.on("roll-dice", async () => {
    const username = socket.handshake.auth.username as string | undefined;

    if (!username) {
      console.error("!username is true");
      return;
    }

    const isRollAvailable = await redis.get(username + "-is-roll-available");
    if (!isRollAvailable || !JSON.parse(isRollAvailable)) {
      console.error("isRollAvailable is null or isRollAvailble is falsy");
      return;
    }

    await redis.set(username + "-is-roll-available", "false");

    const dice = [getDiceNumber(), getDiceNumber()];

    const isDouble = dice[0] === dice[1];
    if (isDouble) {
      dice.push(dice[0]);
      dice.push(dice[0]);
    }

    await redis.set(username + "-dice", JSON.stringify(dice));

    const userSocketId = await redis.get(username + "-socket-id");
    if (!userSocketId) {
      console.error("userSocketId is null");
      return;
    }

    await redis.set(username + "-n-of-available-moves", isDouble ? "4" : "2");
    io.to(userSocketId).emit("dice-rolled", dice);
  });
}
