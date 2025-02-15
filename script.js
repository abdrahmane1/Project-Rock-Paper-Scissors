function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.random();
  const index = Math.floor(randomNumber * choices.length);
  let computerChoice = choices[index];
  return computerChoice;
}

function getHumanChoice() {
  const humanChoice = prompt(
    "Please enter your choice: rock, paper, or scissors."
  );
  if (
    humanChoice === "rock" ||
    humanChoice === "paper" ||
    humanChoice === "scissors"
  ) {
    return humanChoice;
  } else {
    alert("Invalid choice. Please enter rock, paper, or scissors.");
    return getHumanChoice();
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);
    alert(result);

    if (result === "You win!") {
      humanScore++;
    } else if (result === "Computer wins!") {
      computerScore++;
    }
  }

  if (humanScore > computerScore) {
    alert(
      `You win the game! your score: ${humanScore} opponent score: ${computerScore}`
    );
  } else if (humanScore < computerScore) {
    alert(
      `Computer wins the game! your score: ${humanScore} opponent score: ${computerScore}`
    );
  } else {
    alert(
      `It's a tie! your score: ${humanScore} opponent score: ${computerScore}`
    );
  }

  // there is no tie but if we change the code in the future we already have the logic
}

playGame();
