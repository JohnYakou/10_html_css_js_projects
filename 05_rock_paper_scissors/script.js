const buttons = document.querySelectorAll("button");
const resultElement = document.getElementById("result");
// pour afficher les scores
const playerScoreElement = document.getElementById("user-score");
const computerScoreElement = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        // console.log("Vous avez cliquez sur :", button.id);
        const result = playRound(button.id, computerPlay());
        // console.log(result);
        // pour afficher le résultat
        resultElement.textContent = result;
    });
});

function computerPlay(){
    const choices = ["pierre", "feuille", "ciseaux"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection){
    // si le choix du joueur est identique à celui du l'ordi
    if(playerSelection === computerSelection){
        return "C'est une égalité !";
    }else if (
        (playerSelection === "pierre" && computerSelection === "ciseaux")
        ||
        (playerSelection === "feuille" && computerSelection === "pierre")
        ||
        (playerSelection === "ciseaux" && computerSelection === "feuille")
    ) {
        // concaténation - augmente le score du joueur de 1
        playerScore++;
        // pour afficher le score
        playerScoreElement.textContent = playerScore;

        return "VICTOIRE ! L'ordinateur a choisi : " + computerSelection;
    }else{
        // concaténation - augmente le score de l'ordi de 1
        computerScore++;
        // pour afficher le score de l'ordi
        computerScoreElement.textContent = computerScore;

        return "DEFAITE ! L'ordinateur a choisi : " + computerSelection;
    }
}