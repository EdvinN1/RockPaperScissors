
const rock = 0
const paper = 1
const scissors = 2

let playerChoice
let computerChoice

let playerPoints = 0
let computerPoints = 0

let htmlPlayerPoints = document.getElementById("p1Score");
let htmlComputerPoints = document.getElementById("p2Score");
let winnerText = document.getElementById("winnerText");
let winnerLoser = document.getElementById("winnerLoser");
let gamePage = document.getElementById("gamePage");

function generateRandomNumber() {
    return Math.floor(Math.random() * 3);
}
function resetStats() {
    htmlPlayerPoints.innerText = 0;
    htmlComputerPoints.innerText = 0;
    playerPoints = 0
    computerPoints = 0
}

const choiceRock = document.getElementById("sten")
choiceRock.addEventListener("click", function handleClick() {
    playerChoice = 0;
    computerChoice = generateRandomNumber()
    checkWinner(computerChoice, playerChoice);
})
const choiceScissors = document.getElementById("sax")
choiceScissors.addEventListener("click", function handleClick() {
    playerChoice = 1;
    computerChoice = generateRandomNumber()
    checkWinner(computerChoice, playerChoice);
})


const choicePaper = document.getElementById("pase");
choicePaper.addEventListener("click", function handleClick() {
    playerChoice = 2;
    computerChoice = generateRandomNumber()
    checkWinner(computerChoice, playerChoice);
})

let winnerPageText = document.getElementById("resultOne");
let winnerPageText2 = document.getElementById("resultTwo");

function checkWinner(computer, player) {

    if ((computer + 1) % 3 == player) {
        playerPoints++
        htmlPlayerPoints.innerText = playerPoints;
        winnerText.innerText = "You got a point"

    } else if ((player + 1) % 3 == computer) {
        computerPoints++
        htmlComputerPoints.innerText = computerPoints;
        winnerText.innerText = "Opponent  got a point"
    } else {
        winnerText.innerText = "Draw"
    }

    if (playerPoints === 3) {
        winnerPageText.innerText = "You won!"
        winnerPageText2.innerText = "You won!"
        gamePage.style.display = "none"
        winnerLoser.style.display = ""

        resetStats()

    } else if (computerPoints === 3) {
        winnerPageText.innerText = "You lost!"
        winnerPageText2.innerText = "You lost!"
        gamePage.style.display = "none"
        winnerLoser.style.display = ""
        resetStats()

    }
}
