// Buttons
let intructionsButton = document.getElementById("intructionsButton");
let rockButton = document.getElementById("rockButton");
let paperButton = document.getElementById("paperButton");
let scissorsButton = document.getElementById("scissorsButton");
let lizardButton = document.getElementById("lizardButton");
let spockButton = document.getElementById("spockButton");

rockButton.addEventListener("click", () => gameMode === "CPU" ? gameplay("rock") : pvp("rock"));
paperButton.addEventListener("click", () => gameMode === "CPU" ? gameplay("paper") : pvp("paper"));
scissorsButton.addEventListener("click", () => gameMode === "CPU" ? gameplay("scissors") : pvp("scissors"));
lizardButton.addEventListener("click", () => gameMode === "CPU" ? gameplay("lizard") : pvp("lizard"));
spockButton.addEventListener("click", () => gameMode === "CPU" ? gameplay("spock") : pvp("spock"));


// Dom
let userRPSLS = document.getElementById("userRPSLS");
let cpuRPSLS = document.getElementById("cpuRPSLS");

let playerCounter = document.getElementById("playerCounter");
let cpuCounter = document.getElementById("cpuCounter");
let gameRounds = document.getElementById("gameRounds")
let roundWinner = document.getElementById("roundWinner");

// Local Storage Rounds
let gameMatchType = localStorage.getItem("gameMatchType");
let roundsToWin;

if (gameMatchType === "singleRound") 
{
    roundsToWin = 1;
} 
else if (gameMatchType === "bestOf3") 
{
    roundsToWin = 3; 
} 
else if (gameMatchType === "bestOf4") 
{
    roundsToWin = 4; 
} 

// Local Storage CPU or PvP
let gameMode = localStorage.getItem("gameMode");
if (gameMode === "CPU") 
    {
    roundWinner.innerHTML = "Player vs CPU mode selected! Start the game.";
} 
else if (gameMode === "PVP") 
    {
    roundWinner.innerHTML = "Player vs Player mode selected! Player 1, it's your turn!";
}


// CPU

//Score tracker
let playerScore = 0;
let cpuScore = 0;

const winConditions = 
    {
        rock: ["scissors", "lizard"],
        paper: ["rock", "spock"],
        scissors: ["paper", "lizard"],
        lizard: ["paper", "spock"],
        spock: ["pock", "scissors"]
    };

async function gameplay(playerChoice) 
{
    const grabApi = await getAPI(); 
    const computerChoice = grabApi.toLowerCase().trim();
    

    userRPSLS.innerHTML = `You chose: [${playerChoice}] CPU chose: [${computerChoice}]`;

    if (winConditions[playerChoice].includes(computerChoice)) 
        {       
            roundWinner.innerHTML = `<span style="color: green;">You win this round!</span>`;
            playerScore++;
            playerCounter.innerHTML = playerScore;
        } 
        else if (playerChoice === computerChoice) 
        {
            roundWinner.innerHTML = `<span style="color: yellow;">What!? You two tied! Go again!!</span>`;
        } 
        else  
        {         
            roundWinner.innerHTML = `<span style="color: red;">CPU wins this round!</span>`;
            cpuScore++;
            cpuCounter.innerHTML = cpuScore;
        }

    // Counter
    if (playerScore >= roundsToWin) 
    {
        setTimeout(() => 
        {
            location.replace("../pages/pageWin.html")
        }, 1000)
    } 
    else if (cpuScore >= roundsToWin) 
    {
        setTimeout(() =>
        {
            location.replace("../pages/pageLose.html")
        }, 1000)
    }    
}
    
// Api
async function getAPI()
{
    const response = await fetch(`https://asrockpaperscissors-fad8ckb6e0bcfue8.westus-01.azurewebsites.net/RockPaperScissors/beginGame`);
    const data = await response.text();
    console.log(data);
    return data;
}

//--------------------------------------------------- PvP -------------------------------------------------------------------
let player1Score = 0;
let player2Score = 0;

let currentPlayer = 1;
let player1Choice = ""; 

function pvp(choice) 
{
    if (currentPlayer === 1) 
    {
        player1Choice = choice;

        currentPlayer = 2; 
        userRPSLS.innerHTML = `Player 2, it's your turn!`;
    } 
    else if (currentPlayer === 2) 
    {
        let player2Choice = choice;

        checkRoundWinner(player1Choice, player2Choice);
        currentPlayer = 1; 
        userRPSLS.innerHTML = `Player 1, it's your turn!`;
    }
    
}

function checkRoundWinner(player1Choice, player2Choice) 
{
    if (winConditions[player1Choice].includes(player2Choice)) 
    {
        roundWinner.innerHTML = `<span style="color: green;">Player 1 wins this round!</span>`;
        player1Score++;
        playerCounter.innerHTML = player1Score;
    } 
    else if (winConditions[player2Choice].includes(player1Choice)) 
    {
        roundWinner.innerHTML = `<span style="color: red;">Player 2 wins this round!</span>`;
        player2Score++;
        cpuCounter.innerHTML = player2Score;
    } 
    else 
    {
        roundWinner.innerHTML = `<span style="color: yellow;">It's a tie! Go again!</span>`;
    }

    if (player1Score >= roundsToWin) 
    {
        roundWinner.innerHTML = `<span style="color: green;">Congrats Player 1 wins the match!</span>`;
    } 
    else if (player2Score >= roundsToWin) 
    {
        roundWinner.innerHTML = `<span style="color: green;">Congrats Player 2 wins the match!</span>`;
    }
    
}


    

