import redis from "../clients/redis";

export default async function getLastGameId() {
  const gamesJSON = await redis.get("games");

  if (gamesJSON) {
    const games = JSON.parse(gamesJSON) as game[];
    const lastId = games.sort((a, b) => b.id - b.id);
  }
}
