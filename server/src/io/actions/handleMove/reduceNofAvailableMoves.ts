import redis from "../../../clients/redis";

export default async function reduceNofAvailableMoves(username: string) {
  const nOfAvailableMoves = await redis.get(username + "n-of-available-moves");
  if (nOfAvailableMoves === null) {
    console.error("nOfAvailableMoves is null");
    return;
  }

  await redis.set(username + "-n-of-available-moves", +nOfAvailableMoves - 1);
}
