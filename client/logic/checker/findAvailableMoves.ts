import Logic from "../../data/Logic";

type findAvailableMovesType = (color: number, index: number) => void;
const findAvailableMoves: findAvailableMovesType = (color, index) => {
  Logic.availableMoves = [];
  const nums = Logic.diceNumbers;

  nums.forEach((n) => {
    const iToCheck = color === 0 ? index + n : index - n;
    if (iToCheck < 0 || iToCheck > 23) return;
    const last = Logic.checkers[iToCheck].length - 1;

    const isSameMove = Logic.availableMoves.filter((m) => m.index === iToCheck).length > 0;
    if (isSameMove) return;

    if (last === -1) {
      Logic.availableMoves.push({ type: "move", index: iToCheck });
    }
    if (last === 0 && Logic.checkers[iToCheck][last].userData.color === (color === 0 ? 1 : 0)) {
      Logic.availableMoves.push({ type: "capture", index: iToCheck });
    }
    if (last >= 0 && last <= 4 && Logic.checkers[iToCheck][last].userData.color === color) {
      Logic.availableMoves.push({ type: "move", index: iToCheck });
    }
  });
  console.log(Logic.availableMoves);
};

export default findAvailableMoves;
