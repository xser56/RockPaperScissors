// Buttons
let intructionsButton = document.getElementById("intructionsButton");
let rockButton = document.getElementById("rockButton");
let paperButton = document.getElementById("paperButton");
let scissorsButton = document.getElementById("scissorsButton");
let lizardButton = document.getElementById("lizardButton");
let spockButton = document.getElementById("spockButton");

rockButton.addEventListener("click", () => gameplay("rock"));
paperButton.addEventListener("click", () => gameplay("paper"));
scissorsButton.addEventListener("click", () => gameplay("scissors"));
lizardButton.addEventListener("click", () => gameplay("lizard"));
spockButton.addEventListener("click", () => gameplay("spock"));

// Dom
let userRPSLS = document.getElementById("userRPSLS");
let cpuRPSLS = document.getElementById("cpuRPSLS");

let playerCounter = document.getElementById("playerCounter");
let userCounter = document.getElementById("userCounter");
let roundWinner = document.getElementById("roundWinner");


//Score tracker
let playerScore = 1;
let cpuScore = 1;

async function gameplay(playerChoice) 
{
    const grabApi = await getAPI(); 
    const computerChoice = grabApi.toLowerCase().trim();

    const winConditions = 
    {
        rock: ["scissors", "sizard"],
        paper: ["rock", "spock"],
        scissors: ["paper", "lizard"],
        lizard: ["paper", "spock"],
        spock: ["pock", "scissors"]
    };

    userRPSLS.innerHTML = `You chose: [${playerChoice}] CPU chose: [${computerChoice}]`;

    if (winConditions[playerChoice].includes(computerChoice)) 
        {       
            cpuScore++;
            roundWinner.innerHTML = `<span style="color: green;">You win this round!</span>`;
            playerCounter.innerHTML = playerScore++;
        } 
        else if (playerChoice === computerChoice) 
        {
            roundWinner.innerHTML = `<span style="color: yellow;">What!? You two tied! Go again!!</span>`;
        } 
        else  
        {         
            cpuCounter.innerHTML = cpuScore++;
            roundWinner.innerHTML = `<span style="color: red;">CPU wins this round!</span>`;
        }
        
    // Counter
    if (playerScore === 10) 
    {
        // .displayblock syntax turn off page = you win page
        // Move to You win page; 
    } 
    else if (cpuScore === 10) 
    {
        // .displayblock syntax turn off page = you lose page
        // Move to you lose page
    }    
}
    
// if gamemode1()
// Api
async function getAPI()
{
    const response = await fetch(`https://asrockpaperscissors-fad8ckb6e0bcfue8.westus-01.azurewebsites.net/RockPaperScissors/beginGame`);
    const data = await response.text();
    console.log(data);
    return data;
}
getAPI();