function rockPaperScissors(item1, item2) {
  switch (item1) {
    case "rock":
      switch (item2) {
        case "paper":
          return "Player 2 wins!";
        case "rock":
          return "It's a tie!";
        case "scissors":
          return "Player 1 wins!";
      }
    case "paper":
      switch (item2) {
        case "paper":
          return "It's a tie!";
        case "rock":
          return "Player 1 wins!";
        case "scissors":
          return "Player 2 wins!";
      }
    case "scissors":
      switch (item2) {
        case "paper":
          return "Player 1 wins!";
        case "rock":
          return "Player 2 wins!";
        case "scissors":
          return "It's a tie!";
      }
  }
}

// Export the function using CommonJS
module.exports = rockPaperScissors;
