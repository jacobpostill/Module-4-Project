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


const quiz = [
    {
        question:"What is 4 + 4?",
        options:["8","4","6","18"],
        answer:"8"
    },
    {
        question:"What is 8 + 8?",
        options:["8","4","6","16"],
        answer:"8"
    },    {
        question:"What is 3 + 3?",
        options:["8","4","6","18"],
        answer:"8"
    },    {
        question:"What is 2 + 2?",
        options:["8","4","6","18"],
        answer:"8"
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
    right-wrong.classList.remove('wrong','right');
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

