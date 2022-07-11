// import type { Mesh } from "three";
// import type { checkersType } from "../data/schemas/checkers";

class Logic {
  checkers: any[][];
  selectedChecker: any;
  diceNumbers: number[];

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
  }
}

const logic = new Logic();
export default logic;
