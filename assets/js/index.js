document.getElementById('start').addEventListener('click', startQuiz);
document.getElementById('start').addEventListener('click', showQuestion);
document.getElementById('questionEl');
document.getElementById('answersEl');

var currentQuestion;
var quizEl = document.getElementById('quiz')
var questionNumber = -1
var score = 0
var timer = 60
var name = prompt


var quizQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: {
            1: "strings",
            2: "booleans",
            3: "alerts",
            4: "numbers"
        },
        correctAnswer: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed with _______.",
        answers: {
            1: "quotes",
            2: "curly brackets",
            3: "parentheses",
            4: "square brackets",
        },
        correctAnswer: "parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store _______.",
        answers: {
            1: "numbers and strings",
            2: "other arrays",
            3: "booleans",
            4: "all of the above",
        },
        correctAnswer: "all of the above"
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        answers: {
            1: "commas",
            2: "curly brackets",
            3: "quotes",
            4: "parentheses",
        },
        correctAnswer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is _______.",
        answers: {
            1: "JavaScript",
            2: "terminal/bash",
            3: "for loops",
            4: "console.log",
        },
        correctAnswer: "console.log"
    },
    {
        question: "Which of the following keywords does NOT create a variable?",
        answers: {
            1: "let",
            2: "var",
            3: "for",
            4: "const",
        },
        correctAnswer: "for"
    },
    {
        question: "Which of the following is NOT a type of loop used in JavaScript?",
        answers: {
            1: "while",
            2: "after",
            3: "for",
            4: "for...of",
        },
        correctAnswer: "after"
    },
    {
        question: "What is the name for a function passed as an argument to another function?",
        answers: {
            1: "return",
            2: "break",
            3: "invoke",
            4: "callback",
        },
        correctAnswer: "callback"
    },
    {
        question: "Game Over!",
        answers: {
            1: "Your Score was:" + score
        }
    }
];


function startTimer( display) {

    var timerId = setInterval(function () {
    let seconds = parseInt(timer);
    display.textContent = seconds;
    timer--
    if(timer <= 0) {
        clearInterval(timerId)
    }
    }, 1000);
}

window.onload = function () {
    var oneMinute = 60,
        display = document.querySelector('#time');
        startTimer(display);
};


function startQuiz() {
    document.getElementById('banner').style.display = 'none';
    document.getElementById('question').style.display = 'block';
}

function showQuestion(){
    questionNumber++;
    quizEl.innerText = "";

    
    currentQuestion = quizQuestions[questionNumber];
    var questionEl = document.createElement("p");
    questionEl.innerText = currentQuestion.question;
    
    document.getElementById('quiz').appendChild(questionEl);
    
    var tempIndex = 0;
    for (var answers of Object.values(currentQuestion.answers)) {
        //console.log(answers);
    //for (var correctAnswer of Object.values(currentQuestion.correctAnswer))    
        //console.log(currentQuestion.correctAnswer);
    var answersEl = document.createElement("button");
    answersEl.id = tempIndex;
    document.getElementById('quiz').appendChild(answersEl)
    answersEl.innerText = answers;
    tempIndex++;
    answersEl.addEventListener("click", checkAnswer);
    }
};

function checkAnswer(event) {
    if (event.target.innerText == currentQuestion.correctAnswer) {
        score++;
    } else {
        timer -=5 ;
    }
    showQuestion();
    endQuiz();
    console.log(score);
    //console.log(questionNumber)
    //console.log(quizQuestions.length)
};

function endQuiz() {
    if (questionNumber === quizQuestions.length -1) {
        prompt("The quiz has ended! Please enter your initials to save your score.");
    }
    if (timer <= 1) {
        prompt("The quiz has ended! Please enter your initials to save your score.");
    }
}



