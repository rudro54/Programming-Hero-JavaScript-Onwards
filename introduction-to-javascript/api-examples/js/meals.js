const loadMeals = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(rest => rest.json())
        .then(data => displayMeals(data.meals))

}

const displayMeals = meals => {
    const mealsContainer = document.getElementById('meal-container');
    meals.forEach(meal => {
        console.log(meal);
    });
}
loadMeals();