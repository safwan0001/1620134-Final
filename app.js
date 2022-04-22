const searchedMeals = document.getElementById('meal-cards');
const searchResult = document.getElementById('search-field');

document.getElementById('search-btn').addEventListener('click', async () => {
    const searchText = searchResult.value;
    console.log(searchText);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    displayMealDetails(data.meals);

});

const displayMealDetails = meals => {

    searchedMeals.textContent = '';
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="col">
                <div class="card h-100">
                <img src="${meal.strMealThumb}" atl="Book cover" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${'Meal ID: ' + meal.idMeal}</h5>
                    <h4 class="card-title">${'Meal name: ' + meal.strMeal}</h4>
                    <h6 class="card-title">${'Meal category: ' + meal.strCategory}</h6>
                    <p class="card-text">${meal.strInstructions}</p>
                </div>
                </div>
            </div>
            `;
        searchedMeals.appendChild(div);
    });
}

const clearAll = () => {
    searchedMeals.textContent = '';
    searchResult.value = '';
}