// data
// import BoardData from "../../../data/Board";

import { useRef } from "react";
import Logic from "../../data/Logic";

type handleClickType = (dice0: any, dice1: any) => void;
const handleClick: handleClickType = (dice0, dice1) => {
  const diceNumbers = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
  Logic.diceNumbers = diceNumbers;

  const ICON_PATH = "/icons/dice/";
  dice0.src = ICON_PATH + diceNumbers[0] + ".svg";
  dice1.src = ICON_PATH + diceNumbers[1] + ".svg";
};

const DiceSection = () => {
  let dice0Ref = useRef(null);
  let dice1Ref = useRef(null);

  return (
    <div className="flex gap-x-3 items-center absolute z-10 p-3 bg-slate-300 rounded-br">
      <div className="flex gap-x-3">
        <img ref={dice0Ref} className="max-w-[4em]" src="/icons/dice/6.svg" alt="dice" />
        <img ref={dice1Ref} className="max-w-[4em]" src="/icons/dice/6.svg" alt="dice" />
      </div>
      <button onClick={() => handleClick(dice0Ref.current, dice1Ref.current)}>
        <img src="/icons/dice/change-dice.svg" alt="change dice icon" />
      </button>
    </div>
  );
};

export default DiceSection;
