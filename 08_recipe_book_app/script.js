// L'API provient de spoonacular.com
const API_KEY = "bb83cf87f218485ab6d8b4242b81f6c3";
const recipeListElement = document.getElementById("recipe-list");

async function getRecipes(){
    const responce = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
    const data = await responce.json();
    return data.recipes;
}

function displayRecipes(recipes){
    recipeListElement.innerHTML = "";
    recipes.forEach((recipe) => {
        // li de la recette
        const recipeItemElement = document.createElement("li");
        // classList.add => ajoute une class à l'élément créer ci-dessus
        recipeItemElement.classList.add("recipe-item");
        // appendChild => affiche les éléments créer sur l'écran
        recipeListElement.appendChild(recipeItemElement);

        // Image de la recette
        recipeImageElement = document.createElement("img");
        recipeImageElement.src = recipe.image;
        recipeImageElement.alt = "recipe image";
        recipeItemElement.appendChild(recipeImageElement);

        // titre de la recette
        recipeTitleElement = document.createElement("h2");
        recipeTitleElement.innerHTML = recipe.title;
        recipeItemElement.appendChild(recipeTitleElement);

        // p = ingrédients
        recipeIngredientsElement = document.createElement("p");
        // nous ne pouvons pas utiliser forEach, car il ne renvoie pas d'array (tableau)
        recipeIngredientsElement.innerHTML = `<strong>Ingredients :<br></strong> ${recipe.extendedIngredients.map((ingredients) => ingredients.original).join("<br>")}`;
        recipeItemElement.appendChild(recipeIngredientsElement);

        // a = lien externe
        recipeLinkElement = document.createElement("a");
        recipeLinkElement.href = recipe.sourceUrl;
        recipeLinkElement.innerHTML = "View recipe";
        recipeLinkElement.target = "_blank";
        recipeItemElement.appendChild(recipeLinkElement);
    });
}

async function init(){
    const recipes = await getRecipes();
    // console.log(recipes);

    displayRecipes(recipes);
}

init();