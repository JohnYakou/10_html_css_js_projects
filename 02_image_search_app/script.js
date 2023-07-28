// API - La clé provient de unsplash.com et me permet d'avoir accès à toutes leurs images (c'est un site d'images libres de droits)
const accessKey = "VnSVWvE28L7fzd493lWQEIdY56jDB80gX61OJB7ON7w"

const formElement = document.querySelector("form");
const searchInputElement = document.getElementById("search-input");
const searchResultsElement = document.querySelector(".search-results");
const showMoreButtonElement = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImages(){
    inputData = searchInputElement.value;
    // console.log(inputData);

    // C'est l'URL qui s'affiche lorsque je recherche une image
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    // console.log(url);

    // pour pourvoir utilier await, la fonction doit être async
    const response = await fetch(url);
    // .json() = convertit la data en fichier json
    const data = await response.json();
    // console.log(data);

    if(page === 1){
        searchResultsElement.innerHTML = "";
    }

    const results = data.results;
    // console.log(results);

    results.map((result) => {
        // permet de créer une div
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        // console.log(result);
        imageLink.textContent = result.alt_description;

        // append signifie ajouter. Méthode qui permet de faire un noeud et ajouter les images et autres contenus sur l'écran.
        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResultsElement.appendChild(imageWrapper);
    });

    // permet de créer une 2e page pour que le bouton Show More puisse s'afficher.
    page++;

    // console.log(page);

    // condition pour afficher le bouton Show More
    if(page > 1){
        showMoreButtonElement.style.display = "block";
    }
}

formElement.addEventListener("submit", (event) => {
    // la méthode indique à l'agent utilisateur que si l'évènement n'est pas explicitement géré, l'action par défaut ne devrait pas être exécutée comme elle l'est normalement. (mozilla.org). Sans cette méthode, le console.log ne fonctionne pas.
    event.preventDefault();
    // console.log("Submitted");
    page = 1;
    searchImages();
});

// fonctionnement du bouton Show More
showMoreButtonElement.addEventListener("click", () => {
    searchImages();
})