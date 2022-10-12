const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(rest => rest.json())
        .then(data => displayMeals(data.meals))

}

const displayMeals = meals => {
    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.innerHTML = ``;
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        //console.log(meal);
        mealDiv.innerHTML = `
        
        <div onclick = "loadMealDetails(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
        </div>
        </div>
        
        `;
        mealsContainer.appendChild(mealDiv);

    });
}
const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadMeals(searchText);
    searchField.value = '';
}

const loadMealDetails = (idMeal) => {
    //console.log('get details of id', idMeal);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`; // 
    // you will get error if you forget to put https ://
    //console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetaisl(data.meals[0]))

}

const displayMealDetaisl = meal => {
    const detailedContainer = document.getElementById('detailed-container');
    detailedContainer.innerHTML = ``;
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('card');
    mealDiv.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
            the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
   
   `;
    detailedContainer.appendChild(mealDiv);

}

loadMeals('');
