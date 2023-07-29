const timerElement = document.getElementById("timer");
const startButtonElement = document.getElementById("start");
const stopButtonElement = document.getElementById("stop");
const resetButtonElement = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer(){
    // Date.now renvoie des millisecondes
    startTime = Date.now() - elapsedTime;

    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timerElement.textContent = formatTime(elapsedTime);
    }, 10);

    startButtonElement.disabled = true;
    stopButtonElement.disabled = false;
}

function formatTime(elapsedTime){
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    // ? => si ce n'est pas 0
    // : => autrement
    // si c'est 0, retourn 00
    return (
        (hours ? (hours > 9 ? hours : "0" + hours) : "00")
        + ":" +
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00")
        + ":" +
        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00")
        + "." +
        (milliseconds > 9 ? milliseconds : "0" + milliseconds));
}

function stopTimer(){
    // méthode qui met en pause un timer
    clearInterval(timerInterval);

    startButtonElement.disabled = false;
    stopButtonElement.disabled = true;
}
function resetTimer(){
    clearInterval(timerInterval);

    elapsedTime = 0;
    // le timer affiche 00:00:00 sur l'écran
    timerElement.textContent = "00:00:00";

    startButtonElement.disabled = false;
    stopButtonElement.disabled = false;
}

startButtonElement.addEventListener("click", startTimer);
stopButtonElement.addEventListener("click", stopTimer);
resetButtonElement.addEventListener("click", resetTimer);