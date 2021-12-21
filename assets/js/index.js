var totalQuestions = $('questions').size();

var currentQuestion = 0;

$questions = $('.questions');

$questions.hide();

$(questions.get(currentQuestion)).fadeIn();


document.getElementById('start').addEventListener('click', handleClick);

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

function handleClick() {
    document.getElementById('banner').style.display = 'none';
    document.getElementById('questions').style.display = 'block';
}
