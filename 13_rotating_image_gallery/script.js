const imageContainerElement = document.querySelector(".image-container");
const prevElement = document.getElementById("prev");
const nextElement = document.getElementById("next");
let x = 0;

prevElement.addEventListener("click", () => {
    // pour faire tourner à 45deg
    x = x + 45;
    updateGallery();
})

nextElement.addEventListener("click", () => {
    x = x - 45;
    updateGallery();
})

// transforme le transform de .image-container (voir css l. 18)
function updateGallery(){
    imageContainerElement.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}