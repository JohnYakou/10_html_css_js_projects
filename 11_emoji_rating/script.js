const startsElement = document.querySelectorAll(".fa-star");
const emojisElement = document.querySelectorAll(".fa-regular");
const colorsArray = ["red", "orange", "blue", "lightgreen", "green"];

// dans l'écran de base, c'est fixer sur 1 étoile et l'émoji rouge
updateRating(0);

startsElement.forEach((starElement, index) => {
    starElement.addEventListener("click", () => {
        updateRating(index)
    });
});

function updateRating(index){
    startsElement.forEach((starElement, index2) => {
        if(index2 < index + 1){
            starElement.classList.add("active");
        }else{
            starElement.classList.remove("active");
        }
    });

    // pour changer les emojis correspondant au nombre d'étoile
    emojisElement.forEach(emojiElement => {
        emojiElement.style.transform = `translateX(-${index * 50}px)`;
        // pour changer la couleur des emojis
        emojiElement.style.color = colorsArray[index];
    })
}