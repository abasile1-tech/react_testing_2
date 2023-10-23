// Test that it returns correct result for a tie

//   Input: 'rock', 'rock'
//   Expected output: "It's a tie!"

//   Input: 'paper', 'paper'
//   Expected output: "It's a tie!"

//   Input: 'scissors', 'scissors'
//   Expected output: "It's a tie!"
// Test that the function returns "Player 1 wins!" when player 1 chooses rock and player 2 chooses scissors or when player 1 chooses paper and player 2 chooses rock, or when player 1 chooses scissors and player 2 chooses paper

//   Input: 'rock', 'scissors'
//   Expected output: "Player 1 wins!"

//   Input: 'paper', 'rock'
//   Expected output: "Player 1 wins!"

//   Input: 'scissors', 'paper'
//   Expected output: "Player 1 wins!"
// Test that the function returns "Player 2 wins." when player 2 wins

//   Input: 'scissors', 'rock'
//   Expected output: "Player 2 wins!"

//   Input: 'rock', 'paper'
//   Expected output: "Player 2 wins!"

//   Input: 'paper', 'scissors'
//   Expected output: "Player 2 wins!"

const rockPaperScissors = require("../src/rockPaperScissors");

describe("rockPaperScissors function", () => {
  test("rockPaperScissors function is defined", () => {
    expect(typeof rockPaperScissors).toEqual("function");
  });

  // we can use 'it' instead of 'test' if it makes the description more readable
  // 'it' is an alias of 'test'
  it("should return correct result for a tie", () => {
    expect(rockPaperScissors("rock", "rock")).toBe("It's a tie!");
    expect(rockPaperScissors("paper", "paper")).toBe("It's a tie!");
    expect(rockPaperScissors("scissors", "scissors")).toBe("It's a tie!");
  });

  it("should return 'Player 1 wins!' when player 1 chooses rock and player 2 chooses scissors or when player 1 chooses paper and player 2 chooses rock, or when player 1 chooses scissors and player 2 chooses paper", () => {
    expect(rockPaperScissors("rock", "scissors")).toBe("Player 1 wins!");
    expect(rockPaperScissors("paper", "rock")).toBe("Player 1 wins!");
    expect(rockPaperScissors("scissors", "paper")).toBe("Player 1 wins!");
  });

  it("should return 'Player 2 wins.' when player 2 wins", () => {
    expect(rockPaperScissors("scissors", "rock")).toBe("Player 2 wins!");
    expect(rockPaperScissors("rock", "paper")).toBe("Player 2 wins!");
    expect(rockPaperScissors("paper", "scissors")).toBe("Player 2 wins!");
  });
});
