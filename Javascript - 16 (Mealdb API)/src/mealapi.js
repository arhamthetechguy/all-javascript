const searchMeal = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const mealWrapper = document.querySelector(".meal-wrapper");
const searchHeading = document.getElementById("search-heading");
const mealsBox = document.querySelector(".meals-box");


function fetchMeal(){
    if(searchMeal.value){
        let URL = `https://themealdb.com/api/json/v1/1/search.php?s=${searchMeal.value}`;
    fetch(URL)
        .then((res) => res.json())
        .then((meals) => showMeal(meals.meals));
        searchHeading.style.display = "none";
        mealWrapper.innerHTML = "";
        searchMeal.value = "";
    } else {
        alert("Search for a food first")
        searchHeading.style.display = "block"
    }
}

function showMeal(meals){
    // console.log(meals);
    for (let meal of meals){
        mealWrapper.innerHTML += `
        <div class="meal-box border p-2">
                <img src="${meal.strMealThumb}" alt="">
                 <h2 class="text-2xl font-semibold  text-gray-200">${meal.strMeal}</h2>
                 <p class="text-gray-400" >${meal.strInstructions.slice(0, 100)}....</p>
                 <span class="text-slate-500" >${meal.strCategory}</span>
                 <div class="buttons flex gap-1 mt-1">
                 <a class="bg-yellow-400 p-1 rounded block" href="${meal.strYoutube}" target="_blank" rel="noopener noreferrer">Watch</a>
                 <button class="bg-white p-1 rounded" onclick="showDetails('${meal.idMeal}')" >Details</button>
            </div>
        </div>
    `
    }
}

function showDetails(id){
    let URL = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(URL)
        .then((res) => res.json())
        .then((meals) => showMealDetails(meals.meals[0]));  
}

const viewDetails = document.querySelector(".popup-wrapper");
function showMealDetails(meal){
    viewDetails.style.display = "block";

    viewDetails.innerHTML = `
    <div class="popup-content bg-white">
    <h2 class="text-3xl" >${meal.strMeal}</h2>
    <p>${meal.strInstructions}</p>
    <a class="bg-yellow-400 p-1 rounded" href="${meal.strYoutube}" target="_blank" rel="noopener noreferrer">Watch</a>
    <button class="bg-red-500" onclick="closePopUp()">Close</button>
</div>
    `
}

function closePopUp(){
    viewDetails.style.display = "none";
}

searchBtn.addEventListener("click", fetchMeal);