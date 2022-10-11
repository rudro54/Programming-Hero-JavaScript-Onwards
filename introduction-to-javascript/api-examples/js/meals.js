const loadMeals = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(rest => rest.json())
        .then(data => displayMeals(data.meals))

}

const displayMeals = meals => {
    const mealsContainer = document.getElementById('meal-container');
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        console.log(meal);
        mealDiv.innerHTML = `
        
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions}</p>
        </div>
        </div>
        
        `;
        mealsContainer.appendChild(mealDiv);

    });
}
loadMeals();