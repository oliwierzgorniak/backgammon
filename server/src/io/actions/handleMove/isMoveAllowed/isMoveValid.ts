import redis from "../../../../clients/redis";
import doesCheckerExist from "./isMoveValid/doesCheckerExist";
import doesMeetOtherRequirenments from "./isMoveValid/doesMeetOtherRequirenments";
import isXvalid from "./isMoveValid/isXvalid";
import isYvalid from "./isMoveValid/isYvalid";

export default async function isMoveValid(username: string, move: Move) {
  const checkersPositionsJSON = await redis.get(
    username + "-checkers-positions"
  );
  const diceNumbersJSON = await redis.get(username + "-dice");

  if (!checkersPositionsJSON) {
    console.error("!checkersPositions is true");
    return;
  }

  if (!diceNumbersJSON) {
    console.error("!diceNumbers is true");
    return;
  }

  const checkersPositions = JSON.parse(
    checkersPositionsJSON
  ) as CheckersPositions;
  const diceNumbers = JSON.parse(diceNumbersJSON) as number[];

  const checkerColor = move.id <= 14 ? 0 : 1;

  if (!doesCheckerExist(move, checkersPositions, checkerColor)) return false;
  if (!doesMeetOtherRequirenments(move, checkersPositions, checkerColor))
    return false;
  if (!isXvalid(move, diceNumbers, checkerColor)) return false;
  if (!isYvalid(move, checkersPositions, checkerColor)) return false;

  return true;
}
