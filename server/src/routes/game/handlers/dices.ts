import { Request, Response } from "express";
import redis from "../../../clients/redis";
import getDiceNumber from "./dices/getDiceNumber";

export default async function rollDices(req: Request, res: Response) {
  const username = req.header("X-username");

  if (!username) {
    console.error("!username is true");
    return;
  }

  const isRollAvailable = await redis.get(username + "-is-roll-available");
  if (!isRollAvailable || JSON.parse(isRollAvailable)) {
    console.error("isRollAvailable is null or isRollAvailble is falsy");
    return;
  }

  const dices = [getDiceNumber(), getDiceNumber()];
  res.json(dices);
}
