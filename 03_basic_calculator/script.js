// je rajoute "All", car il y a plusieurs button
const buttonsElement = document.querySelectorAll("button");
// console.log(buttonsElement);
const inputFieldElement = document.getElementById("result");

for(let i = 0; i < buttonsElement.length; i++){
    buttonsElement[i].addEventListener("click", () => {
        // console.log(buttonsElement[i].textContent);

        const buttonValue = buttonsElement[i].textContent;
        
        if(buttonValue === "C"){
            clearResult();
        }else if(buttonValue === "="){
            calculateResult();        
        }else{
            appendValue(buttonValue);
        }
    });
}

function clearResult() {
    // je ne met rien entre les guillemets pour reset la calculatrice
    inputFieldElement.value = "";
}

function calculateResult() {
    // eval => evalue tous ce qui est dans l'input
    inputFieldElement.value = eval(inputFieldElement.value);
}

function appendValue(buttonValue) {
    // += permet d'ajouter un nombre à la suite d'un autre (ex. : 78). Sinon, si je tape sur 5, puis sur 6, le 6 va effacer le 5.
    inputFieldElement.value += buttonValue
    // ça marche aussi
    // inputFieldElement.value = inputFieldElement.value + buttonValue;
}