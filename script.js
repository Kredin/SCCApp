// First things to Add form and container classes.
// best to use querySelector instead of getElementbyID, (but no right or wrong answer as both would work)
const breakfastArea = document.querySelector("#breakfast");
const lunchArea = document.querySelector("#lunch");
const dinnerArea = document.querySelector("#dinner");
const snackArea = document.querySelector("#snack");
const excerciseArea = document.querySelector("#excercise");

const calorieData = document.querySelector("#calorieData");

let totalCalories = 0;

calorieData.addEventListener("submit", (e) => {
  e.preventDefault();
  const category = document.querySelector("#category");
  const description = document.querySelector("#description");
  const calories = document.querySelector("#calories");
  console.log(category.value, description.value, calories.value);

  switch (category) {
    case "breakfast":
      addBreakfast(category, description, calories);
      break;
    case "lunch":
      addLunch(category, description, calories);
      break;
    case "dinner":
      addDinner(category, description, calories);
      break;
    case "snack":
      addSnack(category, description, calories);
    case "excercise":
      addExcercise(category, description, calories);
  }
});

function addBreakfast(category, description, calories) {}

function addLunch(category, description, calories) {}

function addDinner(category, description, calories) {}

function addSnack(category, description, calories) {}

function addExcercise(category, description, calories) {}
