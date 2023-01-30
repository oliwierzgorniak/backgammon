import redis from "../../../clients/redis";
import prisma from "../../../clients/prisma";

export default async function joinPlayers(
  searchingPlayersJSON: string,
  id: number
) {
  const searchingPlayers = JSON.parse(searchingPlayersJSON) as number[];

  // TODO many players mechanism
  const player0 = searchingPlayers[0];

  await redis.set("user-" + player0, id);
  await redis.set("user-" + id, player0);

  await prisma.game.create({
    data: { player0: player0, player1: id },
  });

  await redis.set("searching-players", "[]");
}
