let intructionsButton = document.getElementById("intructionsButton");
let rockButton = document.getElementById("rockButton");
let paperButton = document.getElementById("paperButton");
let scissorsButton = document.getElementById("scissorsButton");
let lizardButton = document.getElementById("lizardButton");
let spockButton = document.getElementById("spockButton");

let counter = document.getElementById("counter");
let chosenRPSLS = document.getElementById("chosenRPSLS");
let roundWinner = document.getElementById("roundWinner");

// Buttons
rockButton.addEventListener("click", () => gameplay("rock"));
paperButton.addEventListener("click", () => gameplay("paper"));
scissorsButton.addEventListener("click", () => gameplay("scissors"));
lizardButton.addEventListener("click", () => gameplay("lizard"));
spockButton.addEventListener("click", () => gameplay("spock"));

function gameplay(playerChoice) 
{
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]; // api here

    const winConditions = 
    {
        rock: ["scissors", "lizard"],
        paper: ["rock", "spock"],
        scissors: ["paper", "lizard"],
        lizard: ["paper", "spock"],
        spock: ["rock", "scissors"]
    };

    if (playerChoice === computerChoice) 
    {
        console.log(`You chose ${playerChoice}. CPU chose ${computerChoice}. What!? You two tied! Go again!`);
    } 
    else if (winConditions[playerChoice].includes(computerChoice)) 
    {
        console.log(`You chose ${playerChoice}. CPU chose ${computerChoice}. You win!`);
        // "Player"
    } 
    else 
    {
        console.log(`You chose ${playerChoice}. CPU chose ${computerChoice}. CPU wins!`);
        // innerHTML. counter, ChosenRPSLS, roundWinner
    }
}

// if player 1 wins relocate to you win page
// else CPU wins relocate to you lose page
// 

// Api
// async function getAPI()
// {
//     const response = await fetch(`https://rockpaperscissors-dhe0fsbvb5d4h7a0.westus-01.azurewebsites.net/RockPaperScissors/BeginGame`);
//     const data = await response
//     console.log(data);
//     return data;
// }
// getAPI();