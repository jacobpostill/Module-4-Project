const question = document.querySelector(".Question");
const options = document.querySelector(".options");
const number = document.querySelector(".number");
const start_button = document.getElementById("start-button");
const Quiz = document.querySelector(".Quiz");
const quiz_intro = document.querySelector(".quiz_intro");
let timer = document.getElementById("timeLeft");
let games =-1
let timeRemaining = 75;
let counter;
let score = 0;
let timeFinal = 0
let timerInterval;
let timRemaining_2 = 3;
const rightWrong = document.getElementById("rightWrong");


const quiz = [
    {
        question:"Which command will stop an infinite loop?",
        options:["Alt - C","Shift - C","Esc","Ctrl - C"],
        answer:"Ctrl - C"
    },
    {
        question:"_______ is the process of finding errors and fixing them within a program.",
        options:["Compiling","Executing","Debugging","Scanning"],
        answer:"Debugging"
    },    {
        question:"Sal needs to execute a section of code ten times within a program. Compare the selection structures below and select which one meets the needs identified.",
        options:["If-Else","For","While","If"],
        answer:"For"
    },    {
        question:"A loop that never ends is referred to as a(n)_________.",
        options:["While loop","Infinite loop","Recursive loop","for loop"],
        answer:"Infinite loop"
    },    {
        question:"What is 9 + 9?",
        options:["8","4","6","18"],
        answer:"8"
    },    {
        question:"What is 1 + 1?",
        options:["8","4","6","2"],
        answer:"8"
    }

]


function timerStart() {
    timer.textContent = timeRemaining;
    timerInterval = setInterval(function () {
        timeRemaining--;
        timer.textContent = timeRemaining;
        if (timeRemaining === 0) {
            clearInterval(timerInterval);
            enterInitials()
        }
    }, 1000)
}

function random() {
    randomQuestion = [0,1,2,3,4,5];
    randomQuestion.sort((a, b) => 0.5 - Math.random());
}
let answer1= document.getElementById("answer1");
let answer2= document.getElementById("answer2");
let answer3= document.getElementById("answer3");
let answer4= document.getElementById("answer4");

answer1.addEventListener("click", answer);
answer2.addEventListener("click", answer);
answer3.addEventListener("click", answer);
answer4.addEventListener("click", answer);

function nextQuestion() {
    if (games===5) {
        timerFinal = timeRemaining;
        clearInterval(timerInterval);
        return enterInitials();    
    }
    games++
    //questionSelector = random(games);
    let currQuestion = quiz[randomQuestion[games]]
    question.innerText = currQuestion.question;
    let randomAnswerGen = [0, 1, 2, 3];
    randomAnswerGen.sort((a, b) => 0.5 - Math.random());

    answer1.innerText = currQuestion.options[randomAnswerGen[0]];
    answer2.innerText = currQuestion.options[randomAnswerGen[1]];
    answer3.innerText = currQuestion.options[randomAnswerGen[2]];
    answer4.innerText = currQuestion.options[randomAnswerGen[3]];
    console.log(currQuestion.answers);
}

start_button.addEventListener("click", start);

function start() {
    quiz_intro.classList.add("none");
    start_button.classList.add("none");
    random();
    nextQuestion();
    timerStart();

}

function answer(event) {
    right-wrong.classList.remove('wrong');
    right-wrong.classList.remove('right');
    event.target.innerText;
    console.log(event.target.innerText);
    if (currQuestion.answers[0] == event.target.innerText) {
        total++;
        answerText = "Correct!";
        answerText.classList.add('right');
    } else {
        timeRemaining = timeRemaining - 7;
        answerText.classList.add('wrong');
        answerText = "Wrong!";
    }
    setNextQuestion();
    answerDisplay();
}

function answerDisplay() {
    answerDisplay.innerText = answerText;
    right-wrong.classList.remove("hide");
    let timeRemaining_2_Interval = setInterval(function (){
        console.log(timRemaining_2);
        timRemaining_2--;
        if (timRemaining_2 === 0) {
            right-wrong.classList.add("hide");
            clearInterval(timeRemaining_2_Interval);
        }
    }, 1000)
}

