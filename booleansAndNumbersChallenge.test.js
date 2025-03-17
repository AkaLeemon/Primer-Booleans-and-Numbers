const { multiplyNumbers } = require("./booleansAndNumbersChallenge");

test("multiplyNumbers should return the product of two numbers", () => {
  expect(multiplyNumbers(2, 3)).toBe(6);
  expect(multiplyNumbers(5, 0)).toBe(0);
  expect(multiplyNumbers(-2, 4)).toBe(-8);
});