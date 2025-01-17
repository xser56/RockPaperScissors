import { gameplay } from "./gameplay";

let betsOf1 = document.getElementById("bestOf1");
let bestOf3 = document.getElementById("bestOf3");
let bestOf4 = document.getElementById("bestOf4");

betsOf1.addEventListener("click", () => gameplay())

if (betsOf1)
{
    gameplay();
    if (playerScore === 1)
    {
        console.log("This is end game")
    }
    else if (cpuScore === 1)
    {
        console.log("Cpu end")
    }
}

bestOf3

// if best of 1 is chosen
    // return gameplay()
    // if (playerScore)
// else if best of 3 is chosen
    // return gameplay3