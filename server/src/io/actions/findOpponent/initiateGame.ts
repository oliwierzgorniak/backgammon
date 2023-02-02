import { io } from "../../..";
import prisma from "../../../clients/prisma";
import redis from "../../../clients/redis";
import sendToOpponent from "../../utils/sendToOpponent";
import getCheckersPositions from "./joinPlayers/getCheckersPositions";

export default async function initiateGame(player1: string) {
  const player0 = await redis.get(player1 + "-opponent");
  if (!player0) {
    console.error("player0 is null");
    return;
  }

  const game = await prisma.game.create({
    data: { player0: player0, player1: player1 },
  });

  await redis.set(player0 + "-current-game", game.id);
  await redis.set(player1 + "-current-game", game.id);
  await redis.set(
    game.id + "-checkers-positions",
    JSON.stringify(getCheckersPositions())
  );
  await redis.set(player0 + "-n-of-moves", 0);
  await redis.set(player1 + "-n-of-moves", 0);

  await redis.set(player1 + "-is-roll-available", "true");
  await sendToOpponent(player1, "your-turn");
}
