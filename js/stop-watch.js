let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timerInterval;

const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const millisecondsDisplay = document.getElementById("milliseconds");

const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

function startTimer() {
    timerInterval = setInterval(() => {
        milliseconds += 1;

        if (milliseconds >= 100) {
            milliseconds = 0;
            seconds += 1;
        }

        if (seconds >= 60) {
            seconds = 0;
            minutes += 1;
        }

        minutesDisplay.textContent = minutes < 10 ? `0${minutes}` : minutes;
        secondsDisplay.textContent = seconds < 10 ? `0${seconds}` : seconds;
        millisecondsDisplay.textContent = milliseconds < 10 ? `0${milliseconds}` : milliseconds;
    }, 10);
}

startButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    startTimer();
});

stopButton.addEventListener("click", () => {
    clearInterval(timerInterval);
});

resetButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    minutesDisplay.textContent = "00";
    secondsDisplay.textContent = "00";
    millisecondsDisplay.textContent = "00";
});