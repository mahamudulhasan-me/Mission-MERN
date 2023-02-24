async function loadSixItemsFood() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  const data = await response.json();
  displaySixItems(data.meals);
}
const displaySixItems = async (foods) => {
  const foodContainer = document.getElementById("food_container");
  foods.forEach((food) => {
    const div = document.createElement("div");
    div.classList = "food-item";
    div.innerHTML = `
        
              <div class="flex border rounded-md items-center gap-5 ">
                <img
                  src="${food.strMealThumb}"
                  alt=""
                  class="w-[230px] h-[300px] rounded-l-md"
                />
                <div class="space-y-4">
                  <h3 class="text-2xl font-bold text-gray-700">${food.strMeal}</h3>
                  <p class="text-lg text-gray-500">
                    There are many variations of passages of available, but the
                    majority have suffered
                  </p>
                  <label for="my-modal-3" class=" font-semibold text-yellow-400 underline text-xl" onclick ="loadFoodDetails(${food.idMeal})">
                    View Details
                  </label>
                </div>
              </div>
        `;
    foodContainer.appendChild(div);
    document.getElementById("btn_showAll_container").innerHTML = `
    <button id='btn_showAll'
            class="px-10 py-4 font-bold text-gray-800 bg-yellow-400 rounded-lg"
          >
            Show All
          </button>
    `;
  });
  const allFoodItems = document.querySelectorAll(".food-item");
  let shownCount = 0;
  const SHOW_LIMIT = 6;
  for (let i = 0; i < allFoodItems.length; i++) {
    if (shownCount < SHOW_LIMIT) {
      allFoodItems[i].style.display = "block";
      shownCount++;
    } else {
      allFoodItems[i].style.display = "none";
    }
  }
  document.getElementById("btn_showAll").addEventListener("click", (e) => {
    e.target.style.display = "none";
    for (let i = shownCount; i < allFoodItems.length; i++) {
      if (shownCount < allFoodItems.length) {
        allFoodItems[i].style.display = "block";
        shownCount++;
      } else {
        break;
      }
    }
  });
};

loadSixItemsFood();

function loadFood(strMeal) {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`)
    .then((response) => response.json())
    .then((data) => displayFood(data.meals));
}

function displayFood(foods) {
  const foodContainer = document.getElementById("food_container");
  foodContainer.innerHTML = "";
  foods.forEach((food) => {
    const div = document.createElement("div");
    div.classList = "searchFound";

    div.innerHTML = `
      
            <div class="flex border rounded-md items-center gap-5">
              <img
                src="${food.strMealThumb}"
                alt=""
                class="w-[230px] h-[300px] rounded-l-md"
              />
              <div class="space-y-4">
                <h3 class="text-2xl font-bold text-gray-700">${food.strMeal}</h3>
                <p class="text-lg text-gray-500">
                  There are many variations of passages of available, but the
                  majority have suffered
                </p>
                <button class="font-semibold text-yellow-400 underline text-xl" onclick ="loadFoodDetails(${food.idMeal})"">
                  View Details
                </button>
              </div>
            </div>
          
      `;
    foodContainer.appendChild(div);
    document.getElementById("btn_showAll_container").innerHTML = `
    <button id='btn_showAll'
            class="px-10 py-4 font-bold text-gray-800 bg-yellow-400 rounded-lg"
          >
            Show All
          </button>
    `;
  });
  const allSearchItems = document.querySelectorAll(".searchFound");
  let shownCount = 0;
  const SHOW_LIMIT = 6;
  for (let i = 0; i < allSearchItems.length; i++) {
    if (shownCount < SHOW_LIMIT) {
      allSearchItems[i].style.display = "block";
      shownCount++;
    } else {
      allSearchItems[i].style.display = "none";
    }
  }
  document.getElementById("btn_showAll").addEventListener("click", (e) => {
    e.target.style.display = "none";
    for (let i = shownCount; i < allSearchItems.length; i++) {
      if (shownCount < allSearchItems.length) {
        allSearchItems[i].style.display = "block";
        shownCount++;
      } else {
        break;
      }
    }
  });
}

document.getElementById("btn_search").addEventListener("click", () => {
  const searchValue = document.getElementById("search").value;

  if (searchValue != "") {
    document.getElementById("btn_showAll_container").innerHTML = "";
    loadFood(searchValue);
  }
});

const loadFoodDetails = async (mealId) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  );
  const data = await response.json();
  displayFoodDetails(data.meals[0]);
};
const displayFoodDetails = (food) => {
  console.log(food);

  const foodDetailsContainer = document.querySelector(".modal-box");
  foodDetailsContainer.innerHTML = `
    <label
              for="my-modal-3"
              class="btn btn-sm btn-circle absolute right-2 top-2"
              >✕</label
            >
            <h3 class="text-xl font-bold border-b pb-3 mb-2">${food.strMeal}</h3>
            <img src="${food.strMealThumb}" class="w-full h-72 mb-4" />
            <div>
              <p class="font-semibold text-lg text-gray-700">
                Category: <span class="font-normal text-gray-500">${food.strCategory}</span>
              </p>
              <p class="font-semibold text-lg text-gray-700">
                Area: <span class="font-normal text-gray-500">${food.strArea}</span>
              </p>
              <p class="font-semibold text-lg text-gray-700">
                Instruction: <span class="font-normal text-gray-500">${food.strInstructions}</span>
              </p>
              <p class="font-semibold text-lg text-gray-700">
                YouTube: <span class="font-normal text-gray-500">${food.strYoutube}</span>
              </p>
            </div>
    `;
};
