// import type { Mesh } from "three";
// import type { checkersType } from "../data/schemas/captureCheckers";

class Logic {
  checkers: any[][];
  selectedChecker: any;
  diceNumbers: number[];
  availableMoves: { type: string; index: number }[];
  bar: any[][];
  usersColor: number;
  checkersInFinalZone: number;

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
    this.bar = [[], []];
    this.usersColor = 0; // TODO assigning color
    this.checkersInFinalZone = 0;
  }
}

const logic = new Logic();
export default logic;
