// Score variables
let humanScore = 0;
let computerScore = 0;

// Function to get a random computer choice
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to get human choice
function getHumanChoice() {
    let choice = prompt("Enter Rock, Paper, or Scissors:");
    return choice.toLowerCase(); // Convert to lowercase
}

// Function to play the game (5 rounds)
function playGame() {
    console.log("Welcome to Rock, Paper, Scissors!");

    for (let i = 0; i < 5; i++) {
        console.log("\nRound " + (i + 1));

        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        // Check round result
        if (humanChoice === computerChoice) {
            console.log("It's a tie! Both chose " + humanChoice);
        } 
        else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log("You win! " + humanChoice + " beats " + computerChoice);
        } 
        else {
            computerScore++;
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
        }

        console.log("Score -> Human: " + humanScore + ", Computer: " + computerScore);
    }

    // Show final result
    console.log("\nFinal Score:");
    console.log("Human: " + humanScore + ", Computer: " + computerScore);

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("You lost! Try again.");
    } else {
        console.log("It's a tie game!");
    }
}

// Start the game
playGame();
