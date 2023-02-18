import isXvalid from "../src/io/actions/handleMove/isMoveAllowed/isMoveValid/isXvalid";

test("x out of range", () => {
  expect(
    isXvalid(
      {
        id: 0,
        from: { x: 0, y: 0, area: "board" },
        to: { x: 50, y: 0, area: "board" },
      },
      [1, 2],
      0
    )
  ).toBe(false);
});

test("dice doesn't match", () => {
  expect(
    isXvalid(
      {
        id: 0,
        from: { x: 0, y: 0, area: "board" },
        to: { x: 3, y: 0, area: "board" },
      },
      [1, 2],
      0
    )
  ).toBe(false);
});
