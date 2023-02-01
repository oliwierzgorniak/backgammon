import redis from "../../../../clients/redis";

export default function isMoveValid(user: string, move: Move) {
  const board = await redis.get("user");
}
