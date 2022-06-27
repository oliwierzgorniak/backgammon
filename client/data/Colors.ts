class Colors {
  scene: string[];
  board: string[];
  triangle0: number[];
  triangle1: number[];
  checker0: number[];
  checker1: number[];
  checkerSelected: number[];

  constructor() {
    this.scene = ["#8dbdbd"];
    this.board = ["#363062"];
    this.triangle0 = [0x827397];
    this.triangle1 = [0x4d4c7d];
    this.checker0 = [0xffffff];
    this.checker1 = [0xc54832];
    this.checkerSelected = [0xb3a637];
  }
}

const colors = new Colors();
export default colors;
