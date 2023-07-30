const buttonElement = document.getElementById ("roll-button");
const diceElement = document.getElementById("dice");
// concernant #roll-history
const rollHistoryElement = document.getElementById("roll-history");
let historyList = [];

// pour afficher différentes faces du dé (de 1 à 6). De facto, il n'affiche 1 (index.html ligne 13).
function rollDice(){
    // * 6, car je ne veux seulement des nombres de 1 à 6. Je rajoute Math.floor devant, sinon ça affichera aussi le 0 et les nombres à virgules. Je rajoute + 1, car, avec Math.floor, ça n'affichera seulement les nbs entre 1 à 5.
    const rollResult = Math.floor(Math.random() * 6) + 1;
    // console.log(rollResult);

    // pour changer l'image du dé (4 faces, si le nb est 4) (voir la function getDiceFace).
    const diceFace = getDiceFace(rollResult);
    // console.log(diceFace);
    // pour changer l'image du dé sur l'écran
    diceElement.innerHTML = diceFace;

    // concernant #roll-history
    historyList.push(rollResult);
    updateRollHistory();
};

buttonElement.addEventListener("click", () => {
    // l'animation du dé (voir le CSS)
    diceElement.classList.add("roll-animation");
    // lorsque je lance le dé, je ne peux plus le relancer. Pour éviter cela, j'utiliser la méthode ci-dessous.
    setTimeout(() => {
        diceElement.classList.remove("roll-animation");
        rollDice();
    }, 1000);
});

function getDiceFace(rollResult){
    // je switch entre les nombres, et je retourne l'unicode HTML du dé correspondant au résultat (dé à 5 faces si le résultat est 5).
    switch(rollResult){
        case 1 :
            return "&#9856";
        case 2 :
            return "&#9857";
        case 3 :
            return "&#9858";
        case 4 :
            return "&#9859";
        case 5 :
            return "&#9860";
        case 6 :
            return "&#9861";
        // pour tout autres résultats, tu retourne rien
        default :
            return "";
    }
}

function updateRollHistory(){
    rollHistoryElement.innerHTML = "";

    for (let i = 0; i < historyList.length; i++){
        // pour créer un élément li
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i + 1} : <span>${getDiceFace(historyList[i])}</span>`;

        // appendChild => méthode me permettant d'afficher les li créer ci-dessus
        rollHistoryElement.appendChild(listItem);
    }
}