const question = document.querySelector(".Question");
const options = document.querySelector(".options");
const number = document.querySelector(".number");
const start_button = document.getElementById("start-button");
const Quiz = document.querySelector(".Quiz");
const quiz_intro = document.querySelector(".quiz_intro");
let timer = document.getElementById("timer");
let games;
let timeRemaining = 75;
let counter;
let score = 0;
let timeFinal = 0
let timerInterval;
let timRemaining_2 = 3;
const rightWrong = document.querySelector(".rightWrong.right");

const answer1= document.getElementById("answer1");
const answer2= document.getElementById("answer2");
const answer3= document.getElementById("answer3");
const answer4= document.getElementById("answer4");

function begining() {
    games = -1;
    timer.innerHTML = 0;
    questionElement.classList.add("question-font-size");
    questionElement.innerText = "The Coding Quiz";
    startButton.innerText = "Start";
    timer.classList.remove("hide");
    highScoreLink.classList.remove("hide");
    questionElement.classList.remove("hide");
    welcomeQuiz.classList.remove("hide");
    startButton.classList.remove("hide");


    initals.classList.add("hide");
    answerButtonsElement.classList.add("hide");
    restartButton.classList.add("hide");
    ulAppend.classList.add("hide");

    goToHighscore.addEventListener("click", renderHighScores);
    startButton.addEventListener("click", startGame);
}