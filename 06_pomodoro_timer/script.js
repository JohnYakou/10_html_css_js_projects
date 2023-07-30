const timerElement = document.getElementById("timer");
const startElement = document.getElementById("start");
const stopElement = document.getElementById("stop");
const resetElement = document.getElementById("reset");

let interval;
// en seconde / 1500s = 25min
let timeLeft = 1500;

function updateTimer(){
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    // La méthode padStart() permet de compléter la chaîne courante avec une chaîne de caractères donnée afin d'obtenir une chaîne de longueur fixée. Pour l'utiliser, je dois d'abord convertir minutes et seconds en chaîne de caractère avec toString().
    // Dans padStart(), le 2 signifie que je veux 2 nombres. Et le 0 permet d'ajouter un 0 devant si le nombre est unique (1 à 9). Par exemple, 1 devient 01.
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    timerElement.innerHTML = formattedTime;
}

function startTimer(){
    interval = setInterval(() => {
        // réduis le temps
        timeLeft--;
        updateTimer();

        if(timeLeft === 0){
            clearInterval(interval);
            alert("Time's up !");
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000);
}

function stopTimer(){
    clearInterval(interval);
}

function resetTimer(){
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}

startElement.addEventListener("click", startTimer);
stopElement.addEventListener("click", stopTimer);
resetElement.addEventListener("click", resetTimer);