class Colors {
  scene: string[];
  board: string[];
  triangle1: number[];
  triangle2: number[];

  constructor() {
    this.scene = ["#8dbdbd"];
    this.board = ["#363062"];
    this.triangle1 = [0x827397];
    this.triangle2 = [0x4d4c7d];
  }
}

const colors = new Colors();
export default colors;
