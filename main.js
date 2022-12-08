const rock = 0
const paper = 1
const scissors = 2

let playerChoice
let computerChoice

let playerPoints 
let computerPoints 

let htmlPlayerPoints = document.getElementById("p1Score");
let htmlComputerPoints = document.getElementById("p2Score");


const choiceRock = document.getElementById("sten")
choiceRock.addEventListener("click", function handleClick(){
    playerChoice = 0;
    computerChoice = generateRandomNumber()
    checkWinner(computerChoice, playerChoice);
})
document.getElementById("sax")
document.getElementById("pase")

function checkWinner (computer, player) {
if ((computer + 1) % 3 == player){
    return playerPoints +1;

} else if ((player + 1) % 3 == computer) {
    return computerPoints +1;
} else {
    return console.log("DRAW")
}
}
function generateRandomNumber() {
   return Math.floor(Math.random() * 3);
}
if(playerPoints === undefined){
    htmlPlayerPoints.innerText = 0
} else {
    htmlPlayerPoints.innerText = playerPoints
}
if(computerPoints  === undefined){
    htmlComputerPoints.innerText = 0
} else {
    htmlComputerPoints.innerText = computerPoints
}

console.log(playerPoints /* computerPoints*/)
