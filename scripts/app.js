let goToCpu = document.getElementById("goToCpu");
let goToPvp = document.getElementById("goToPvp");

let cpu1 = document.getElementById("cpu1");
let cpu2 = document.getElementById("cpu2");
let cpu3 = document.getElementById("cpu3");
let pvp1 = document.getElementById("pvp1");
let pvp2 = document.getElementById("pvp2");
let pvp3 = document.getElementById("pvp3");

let hideBestOfCpu = document.getElementById("hideBestOfCpu");
let hideBestOfPvp = document.getElementById("hideBestOfPvp");

// Game Mode Select
goToCpu.addEventListener("click", () => 
{
    hideBestOfCpu.style.display = "block";
    console.log("CPU");
});

goToPvp.addEventListener("click", () => 
{
    hideBestOfPvp.style.display = "block";
    console.log("Pvp");
});

// Round Select CPU
cpu1.addEventListener("click", () => 
{
    console.log("Single Round selected");
    localStorage.setItem("gameMatchType", "singleRound");
    localStorage.setItem("gameMode", "CPU")
    window.location.href = "../pages/gameplayPage.html";
});

cpu2.addEventListener("click", () => 
{
    localStorage.setItem("gameMatchType", "bestOf3");
    localStorage.setItem("gameMode", "CPU")
    console.log("Best of 3 selected");
    window.location.href = "../pages/gameplayPage.html";

});

cpu3.addEventListener("click", () => 
{
    localStorage.setItem("gameMatchType", "bestOf4");
    localStorage.setItem("gameMode", "CPU")
    console.log("Best  of 4 selected");
    window.location.href = "../pages/gameplayPage.html";
});

// Round Select PvP
pvp1.addEventListener("click", () => 
{
    console.log("Single Round selected");
    localStorage.setItem("gameMatchType", "singleRound");
    localStorage.setItem("gameMode", "PVP")
    window.location.href = "../pages/gameplayPage.html";
});

pvp2.addEventListener("click", () => 
{
    localStorage.setItem("gameMatchType", "bestOf3");
    console.log("Best of 3 selected");
    localStorage.setItem("gameMode", "PVP")
    window.location.href = "../pages/gameplayPage.html";

});

pvp3.addEventListener("click", () => 
{
    localStorage.setItem("gameMatchType", "bestOf4");
    console.log("Best  of 4 selected");
    localStorage.setItem("gameMode", "PVP")
    window.location.href = "../pages/gameplayPage.html";
});


// End Game (Win/Lose Page)
let backToMenu = document.getElementById("backToMenu");

backToMenu.addEventListener("click", () =>
{
    localStorage.removeItem("gameMatchType");
    location.replace = "index.html"; 
});