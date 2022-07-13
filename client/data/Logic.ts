// import type { Mesh } from "three";
// import type { checkersType } from "../data/schemas/checkers";

class Logic {
  checkers: any[][];
  selectedChecker: any;
  diceNumbers: number[];
  availableMoves: {type: string, index: number}[];

  constructor() {
    this.checkers = [
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
    ];
    this.selectedChecker = undefined;
    this.diceNumbers = [];
    this.availableMoves = [];
  }
}

const logic = new Logic();
export default logic;
