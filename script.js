let meals = [
    { name: "Oops, try again", description: "dunno what to eat?" }
];

const userMeals = [];

document.getElementById('random-meal-btn').addEventListener('click', function() {
    const allMeals = meals.concat(userMeals);
    const randomIndex = Math.floor(Math.random() * allMeals.length);
    const meal = allMeals[randomIndex];

    document.getElementById('meal-name').innerText = meal.name;
    document.getElementById('meal-description').innerText = meal.description;
    document.getElementById('meal-suggestion').classList.remove('hidden');
});

document.getElementById('meal-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const mealName = document.getElementById('meal-name-input').value;
    const mealDescription = document.getElementById('meal-description-input').value;

    if (mealName && mealDescription) {
        const newMeal = { name: mealName, description: mealDescription };
        userMeals.push(newMeal);
        document.getElementById('meal-name-input').value = '';
        document.getElementById('meal-description-input').value = '';
        addMealToList(newMeal);
        alert('Meal added successfully!');
    } else {
        alert('Please enter both name and description of the meal.');
    }
    updateMealListMessage();
});

document.getElementById('clear-meals-btn').addEventListener('click', function() {
    userMeals.length = 0;
    document.getElementById('meal-list').innerHTML = '';
    updateMealListMessage();
    alert('All user-added meals have been cleared!');
});

function addMealToList(meal) {
    const mealList = document.getElementById('meal-list');
    const mealItem = document.createElement('li');
    mealItem.innerText = `${meal.name}: ${meal.description}`;
    mealList.appendChild(mealItem);
}

function updateMealListMessage() {
    const mealList = document.getElementById('meal-list');
    if (userMeals.length === 0) {
        mealList.innerHTML = '<li>No meals added yet.</li>';
    } else {
        mealList.innerHTML = '';
        userMeals.forEach(meal => addMealToList(meal));
    }
}

// Initialize the meal list message
updateMealListMessage();
