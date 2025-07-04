const startScreen = document.getElementById("start-screen");
const endScreen = document.getElementById("end-screen");
const startBtn = document.getElementById("start-btn");
const balloonContainer = document.getElementById("balloon-container");
const scoreboard = document.getElementById("scoreboard");
const timeDisplay = document.getElementById("time");
const scoreDisplay = document.getElementById("score");
const finalScoreDisplay = document.getElementById("final-score");

let gameInterval;
let timeInterval;
let timeLeft = 30;
let score = 0;

let gamingRunning = false;
function createBalloon() {
    if (!gamingRunning) return;
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.textContent = "🎈";
    
    balloon.style.left = Math.random() * (window.innerWidth - 50) + "px";

    const duration = Math.random() * 3 + 4;
    balloon.style.animationDuration = duration + "s";

    balloon.addEventListener("click", () => {
        balloon.remove();
        score++;
        scoreDisplay.textContent = score;
    });
    balloon.addEventListener("animationend", () => {
        balloon.remove();
    });
    balloonContainer.appendChild(balloon);
}

function startGame() {
    startScreen.style.display = "none";
    scoreboard.style.display = "block"
    gamingRunning = true;

    // start spawning balloon
    gameInterval =  setInterval(createBalloon,400);

    // start countdown
    timeInterval = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}
function endGame() {
    gamingRunning = false;
    clearInterval(gameInterval);
    clearInterval(timeInterval);

    // mostrar a pontuação do Jogador
    scoreboard.style.display = "none";
    endScreen.style.display = "flex";
    finalScoreDisplay.textContent = score;
}

startBtn.addEventListener("click", startGame);