let rockButton = document.getElementById("rockButton")

rockButton.addEventListener("click", function()
{

});








// Api
async function getAPI()
{
    const response = await fetch(`https://rockpaperscissors-dhe0fsbvb5d4h7a0.westus-01.azurewebsites.net/RockPaperScissors/BeginGame`);
    const data = await response
    console.log(data);
    return data;
}
getAPI();

async function RPSLSGame()
{
    let data = await getAPI();
    let player1Input = "Input";
    let RPSLS = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

    if (player1Input == RPSLS)
    {
        console.log("Player 1 wins");
    }
    else 
    {
        console.log("CPU wins");
    }
}
RPSLSGame();