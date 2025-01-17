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
rockButton.addEventListener("click", () => playGame("rock"));
paperButton.addEventListener("click", () => playGame("paper"));
scissorsButton.addEventListener("click", () => playGame("scissors"));
lizardButton.addEventListener("click", () => playGame("lizard"));
spockButton.addEventListener("click", () => playGame("spock"));

function playGame(playerChoice) 
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
        // window.location.href = "win.html";
        console.log(`You chose ${playerChoice}. CPU chose ${computerChoice}. Congratulations! You are triumphant!`);
    } 
    else 
    {
        // window.location.href = "lose.html";
        console.log(`You chose ${playerChoice}. CPU chose ${computerChoice}. How unfortunate! You have been defeated!`);
    }
}

// Api
// async function getAPI()
// {
//     const response = await fetch(`https://rockpaperscissors-dhe0fsbvb5d4h7a0.westus-01.azurewebsites.net/RockPaperScissors/BeginGame`);
//     const data = await response
//     console.log(data);
//     return data;
// }
// getAPI();