export default function getCheckersPositionsJSON() {
  const positions = {
    board: [
      [0, 0],
      [],
      [],
      [],
      [],
      [],
      [1, 1, 1, 1, 1],
      [],
      [1, 1, 1],
      [],
      [],
      [0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1],
      [],
      [],
      [],
      [0, 0, 0],
      [],
      [0, 0, 0, 0, 0],
      [],
      [],
      [],
      [],
      [1, 1],
    ],
    bar: { "0": [], "1": [] },
  };

  return JSON.stringify(positions);
}
