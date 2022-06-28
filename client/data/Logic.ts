// import type { Mesh } from "three";
// import type { checkersType } from "../data/schemas/checkers";

class Logic {
  checkers: any[][];
  selectedChecker: any;

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
  }
}

const logic = new Logic();
export default logic;
