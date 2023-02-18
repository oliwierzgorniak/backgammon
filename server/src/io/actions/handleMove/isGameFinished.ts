import getCheckersPositionsByUsername from "../../utils/getCheckersPositionsByUsername";

export default async function isGameFinished(username: string) {
  const checkersPositions = await getCheckersPositionsByUsername(username);
  if (typeof checkersPositions === "undefined") {
    console.error("checkersPositions is undefined");
    return;
  }

  let found0 = false;
  let found1 = false;
  for (const stack of checkersPositions.board) {
    for (const checker of stack) {
      if (checker === 0) found0 = true;
      else if (checker === 1) found1 = true;
      if (found0 && found1) return false;
    }
  }

  return true;
}
