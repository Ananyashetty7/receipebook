document.getElementById('recipeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    addRecipe();
});

function addRecipe() {
    const recipeName = document.getElementById('recipeName').value;
    const ingredients = document.getElementById('ingredients').value;
    const steps = document.getElementById('steps').value;
    const image = document.getElementById('recipeImage').files[0];
    
    if (recipeName && ingredients && steps) {
        let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
        const recipe = { recipeName, ingredients, steps, imageUrl: URL.createObjectURL(image) };
        recipes.push(recipe);
        localStorage.setItem('recipes', JSON.stringify(recipes));
        displayRecipes();
        document.getElementById('recipeForm').reset();
    }
}

function displayRecipes() {
    const recipesContainer = document.getElementById('recipesContainer');
    recipesContainer.innerHTML = '';
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    recipes.forEach((recipe, index) => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe-item');
        recipeDiv.innerHTML = `
            <h3>${recipe.recipeName}</h3>
            <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
            <p><strong>Steps:</strong> ${recipe.steps}</p>
            <img src="${recipe.imageUrl}" alt="${recipe.recipeName}" width="100%">
        `;
        recipesContainer.appendChild(recipeDiv);
    });
}

function searchRecipes() {
    const query = document.getElementById('searchQuery').value.toLowerCase();
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const filteredRecipes = recipes.filter(recipe =>
        recipe.recipeName.toLowerCase().includes(query) ||
        recipe.ingredients.toLowerCase().includes(query)
    );
    displayFilteredRecipes(filteredRecipes);
}

function displayFilteredRecipes(recipes) {
    const recipesContainer = document.getElementById('recipesContainer');
    recipesContainer.innerHTML = '';
    recipes.forEach((recipe) => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe-item');
        recipeDiv.innerHTML = `
            <h3>${recipe.recipeName}</h3>
            <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
            <p><strong>Steps:</strong> ${recipe.steps}</p>
            <img src="${recipe.imageUrl}" alt="${recipe.recipeName}" width="100%">
        `;
        recipesContainer.appendChild(recipeDiv);
    });
}

// Load recipes on page load
document.addEventListener('DOMContentLoaded', displayRecipes);
