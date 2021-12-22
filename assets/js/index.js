document.getElementById('start').addEventListener('click', startQuiz);
//document.getElementById('start').addEventListener('click', showQuestion);

//var quizContainer = document.getElementById('quiz');



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
        question: "String valuse must be enclosed within _______ when being assigned to variables.",
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
    }
];

function startTimer(duration, display) {
var timer = duration, seconds;
setInterval(function () {
    seconds = parseInt(timer % 60,10);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = seconds;
if (--timer < 0) {
    timer = duration;
    }
    }, 1000);
}

window.onload = function () {
    var oneMinute = 60,
        display = document.querySelector('#time');
        startTimer(oneMinute, display);
};


function startQuiz() {
    document.getElementById('banner').style.display = 'none';
    document.getElementById('question').style.display = 'block';
}

//function showQuestion () {

//var output = [];

//quizQuestions.forEach(
    //(currentQuestion, questionNumber) => {

        //var answers = [];

        //for(number in currentQuestion.answers){
