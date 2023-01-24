
let answLen = [];
let counter = 0;
let currQuestion;
let unansweredQuestion = []

function setUnansweredQuestion(){
    for(let i=0; i<quiz.length; i++){
        unansweredQuestion.push(quiz[i]) 
    }
}
function newQuestion(){
    const questionAppendix = unansweredQuestion[Math.floor(Math.random() * unansweredQuestion.length)]
    Question.innermmmHTML = questionAppendix.q;
    const index_1 = unansweredQuestion.indexOf(questionAppendix);
    unansweredQuestion.splice(index_1,1);
    const answLen = currQuestion.options.length;
    for(let i=0; i<answLen; i++){
        unansweredQuestion.push(i)
    }
    for(let i=0; i<answLen; i++){
        const opt = document.createElement("div");
        const optionIndex = answLen[Math.floor(Math.random() *  answLen.length)];
        opt.innerHTML = currQuestion.options[i];
        opt.id = i;
        opt.className = "option"
        options.appendChild(option)
    }
    counter++;

}

function nextQuestion(){
    if(counter === quiz.length){
        console.log("quiz over");
    }
    else{
        newQuestion()
    }
}


window.onload = function(){
    setUnansweredQuestion();
    newQuestion();
}