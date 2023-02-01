import redis from "../../../clients/redis";
import prisma from "../../../clients/prisma";
import { io } from "../../../index";
import sendToOpponent from "../../utils/sendToOpponent";
import getCheckersPositionsJSON from "./joinPlayers/getcheckersPositionsJSON";

export default async function joinPlayers(
  searchingPlayersJSON: string,
  player1: string
) {
  const searchingPlayers = JSON.parse(searchingPlayersJSON) as string[];

  // TODO many players mechanism
  const player0 = searchingPlayers[0];

  await redis.set(player0 + "-opponent", player1);
  await redis.set(player1 + "-opponent", player0);

  const game = await prisma.game.create({
    data: { player0: player0, player1: player1 },
  });

  await redis.set(player0 + "-current-game", game.id);
  await redis.set(player1 + "-current-game", game.id);
  await redis.set(game.id + "-checkers-positions", getCheckersPositionsJSON());

  console.log(player0, " vs ", player1);

  await redis.del("searching-players");

  await sendToOpponent(player1, "opponent-found");
  await sendToOpponent(player1, "you-start");
}
