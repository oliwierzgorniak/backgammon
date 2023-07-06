import doesMeetOtherRequirenments from "../src/io/actions/handleMove/isMoveAllowed/isMoveValid/doesMeetOtherRequirenments";

// Cases
// 1)
test("2 checkers other color", () => {
  const move = {
    id: 0,
    from: { x: 1, y: 0, area: "board" },
    to: { x: 0, y: 3, area: "board" },
  };
  const checkersPositions = { bar: [], board: [[1, 1], [0]] };
  const checkerColor = 0;

  expect(
    doesMeetOtherRequirenments(move, checkersPositions, checkerColor)
  ).toBe(false);
});

// 2)
test("bar to bar", () => {
  const move = {
    id: 0,
    from: { x: 1, y: 0, area: "bar" },
    to: { x: 0, y: 3, area: "bar" },
  };
  const checkersPositions = { bar: [[], [0]], board: [] };
  const checkerColor = 0;

  expect(
    doesMeetOtherRequirenments(move, checkersPositions, checkerColor)
  ).toBe(false);
});

// 3)
// 3.1)
test("out when not in bearing phase, checker on bar", () => {
  const move = {
    id: 0,
    from: { x: 1, y: 0, area: "bar" },
    to: { x: 0, y: 3, area: "out" },
  };
  const checkersPositions = { bar: [[], [0]], board: [] };
  const checkerColor = 0;

  expect(
    doesMeetOtherRequirenments(move, checkersPositions, checkerColor)
  ).toBe(false);
});

// 3.2)
test("out when not in bearing phase, checker 0 on board", () => {
  const move = {
    id: 0,
    from: { x: 1, y: 0, area: "bar" },
    to: { x: 0, y: 3, area: "out" },
  };
  const checkersPositions = { bar: [[], [0]], board: [[0]] };
  const checkerColor = 0;

  expect(
    doesMeetOtherRequirenments(move, checkersPositions, checkerColor)
  ).toBe(false);
});

// 3.3)
test("out when not in bearing phase, checker 1 on board", () => {
  const move = {
    id: 0,
    from: { x: 1, y: 0, area: "bar" },
    to: { x: 0, y: 3, area: "out" },
  };
  const checkersPositions = { bar: [[], [1]], board: Array(32).fill(1) };
  const checkerColor = 1;

  expect(
    doesMeetOtherRequirenments(move, checkersPositions, checkerColor)
  ).toBe(false);
});
