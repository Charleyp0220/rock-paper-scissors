const body = document.querySelector("body");

const container = document.createElement("div");
container.classList.add("container");
container.style.cssText =`
      background: lightblue;
      width: 400px;
      height: 600px;
      margin: auto;
      border: 2px solid black;
      border-radius: 15px;
      padding: 10px;
      text-align: center;
      font-family: Arial, sans-serif;
    `;
body.appendChild(container);

// Title
const title = document.createElement("h1");
title.textContent = "Welcome to Rock, Paper, Scissors Game!";
title.style.cssText = "margin: 20px; font-size: 25px;";
container.appendChild(title);

const resultContainer = document.createElement("div");
resultContainer.style.cssText =`
      height: 30px;
      width: 300px;
      background: white;
      margin: 80px auto;
      padding: 20px;
      font-size: 18px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
     
    `;
container.appendChild(resultContainer);

const btnContainer = document.createElement("div");
btnContainer.style.cssText =`
      margin: 80px auto;
      height: 80px;
      width: 400px;
      background: rgb(219, 245, 171);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
    `;
container.appendChild(btnContainer);

const buttons = [
    { id: "rock", label: "Rock", color: "red" },
    { id: "paper", label: "Paper", color: "blue" },
    { id: "scissors", label: "Scissors", color: "green" }
  ];

  buttons.forEach(btnData => {
    const btn = document.createElement("button");
    btn.textContent = btnData.label;
    btn.style.cssText = `
      margin: 0 15px;
      background: black;
      color: white;
      padding: 10px 25px;
      border-radius: 15px;
      font-size: 18px;
      border: 2px solid ${btnData.color};
      cursor: pointer;
    `;
    btn.addEventListener("click", () => playGame(btnData.id));
    btnContainer.appendChild(btn);
  });

//   Score Board
const scoreBoard = document.createElement("div");
scoreBoard.style.cssText = `
    margin-top: 10px auto;
    font-weight: bold;
    background: white;
    height: 50px;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
 `;
container.appendChild(scoreBoard);

// Play Again Button
function showPlayAgainButton() {
    const playAgainBtn = document.createElement("button");
    playAgainBtn.textContent = "Play Again";
    playAgainBtn.style.cssText = `
      margin-top: 20px;
      background: darkblue;
      color: white;
      padding: 10px 20px;
      font-size: 16px;
      border-radius: 10px;
      cursor: pointer;
      border: none;
    `;
    playAgainBtn.addEventListener("click", function () {
      humanScore = 0;
      computerScore = 0;
      resultContainer.textContent = "";
      scoreBoard.textContent = `Score — You: 0 | Computer: 0`;
      enableButtons();
      playAgainBtn.remove(); // remove the button from the DOM
    });
  
    container.appendChild(playAgainBtn);
  }
  

// Score variables
let humanScore = 0;
let computerScore = 0;
const maxScore = 5;


//  Function to get a random computer choice
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// function to play game
function playGame(humanChoice) {
    if (humanScore >= maxScore || computerScore >= maxScore) return;

  let computerChoice = getComputerChoice();
  let resultMessage = "";

  if (humanChoice === computerChoice) {
    resultMessage = `It's a tie! Both chose ${humanChoice}`;
    resultContainer.textContent = resultMessage;

    console.log(`It's a tie! Both chose ${humanChoice}`);
   
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultMessage = `You win! ${humanChoice} beats ${computerChoice}`
    resultContainer.textContent = resultMessage;

    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
   
  } else {
    computerScore++;
    resultMessage = `You lose! ${computerChoice} beats ${humanChoice}`
    resultContainer.textContent = resultMessage;

    console.log(`You lose!  ${computerChoice} beats ${humanChoice}`); 
  }
// Score Board
  console.log(`Score — You: ${humanScore} | Computer: ${computerScore}`);
  scoreBoard.textContent = `Score — You: ${humanScore} | Computer: ${computerScore}`;

  if (humanScore === maxScore || computerScore === maxScore) {
    resultContainer.textContent = resultMessage;

    //shows final message after 1 second (1000ms)
   setTimeout(() => {
    let finalMsg = "Game Over! ";
    if (humanScore === maxScore) {
      finalMsg += "🎉 You win the game!";
    } else {
      finalMsg += "😢 Computer wins the game!";
    }
    resultContainer.textContent = finalMsg;
    console.log(`${finalMsg}`);
    

    disableButtons();
    showPlayAgainButton();
  }, 1000);
}

}
// Disables and enables buttons
function disableButtons() {
    const allBtns = btnContainer.querySelectorAll("button");
    allBtns.forEach(btn => btn.disabled = true);
  }
  
  function enableButtons() {
    const allBtns = btnContainer.querySelectorAll("button");
    allBtns.forEach(btn => btn.disabled = false);
  }
  