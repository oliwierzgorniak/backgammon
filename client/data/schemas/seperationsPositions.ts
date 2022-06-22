import BoardData from "../Board";

const offset = BoardData.ySeperationWidth - BoardData.xSeperationWidth / 2;
const separationsX: number[] = [offset, -offset];

export default separationsX;
