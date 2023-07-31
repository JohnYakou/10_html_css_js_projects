const btnElement = document.getElementById("calculate");
const billInput = document.getElementById("input-bill");
const tipInput = document.getElementById("input-tip");
const totalSpan = document.getElementById("span-total");

function calculateTotal(){
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const totalValue = billValue * (1 + tipValue / 100);

    // toFixed(2) me permet d'avoir seulement deux chiffres après la virgule
    totalSpan.innerHTML = totalValue.toFixed(2);
}

btnElement.addEventListener("click", calculateTotal);