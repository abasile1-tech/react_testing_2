// We have a function called compareTo7 that returns a string. Your task is to test that it fulfills the following cases:

// Returns correct result for numbers less than 7

// Input: 5, Expected output: "5 is less than 7"
// Returns correct result for numbers equal to 7

// Input: 7, Expected output: "7 is equal to 7"
// Returns correct result for numbers greater than 7

// Input: 8, Expected output: "8 is greater than 7"

const compareTo7 = require("../src/compareTo7");

describe("compareTo7 function", () => {
  test("compareTo7 function is defined", () => {
    expect(typeof compareTo7).toEqual("function");
  });

  // we can use 'it' instead of 'test' if it makes the description more readable
  // 'it' is an alias of 'test'
  it("should return correct result for numbers less than 7", () => {
    expect(compareTo7(5)).toBe("5 is less than 7");
  });

  it("should return correct result for numbers equal to 7", () => {
    expect(compareTo7(7)).toBe("7 is equal to 7");
  });

  it("should return correct result for numbers greater than 7", () => {
    expect(compareTo7(8)).toBe("8 is greater than 7");
  });
});
