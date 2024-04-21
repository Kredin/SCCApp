// First things to Add form and container classes.
// best to use querySelector instead of getElementbyID, (but no right or wrong answer as both would work)
const breakfastArea = document.querySelector("#breakfast");
const lunchArea = document.querySelector("#lunch");
const dinnerArea = document.querySelector("#dinner");
const snackArea = document.querySelector("#snack");
const excerciseArea = document.querySelector("#excercise");

const totalCaloriesHTML = document.querySelector("#totalCalories");

const calorieData = document.querySelector("#calorieData");

let totalCalories = 0;

calorieData.addEventListener("submit", (e) => {
  e.preventDefault();
  const category = document.querySelector("#category").value;
  const description = document.querySelector("#description").value;
  const calories = parseInt(document.querySelector("#calories").value);
  console.log(category, description, calories);

  //   if (category === "breakfast") {
  //     addBreakfast(description, calories);
  //   }else if(category === "lunch") {
  //     addLunch(description, calories)
  //   }else if(category === "dinner") {
  //     addDinner(description, calories)
  //   }else if(category === "snack") {
  //     addSnack(description, calories)
  //   }else if(category === "excercise") {
  //     addExcercise(description, calories)
  //   }

  switch (category) {
    case "breakfast":
      addBreakfast(description, calories);
      break;
    case "lunch":
      addLunch(description, calories);
      break;
    case "dinner":
      addDinner(description, calories);
      break;
    case "snack":
      addSnack(description, calories);
    case "excercise":
      addExcercise(description, calories);
  }
});

function addBreakfast(description, calories) {
  const h5 = document.createElement("h5");
  h5.textContent = description + " " + calories;
  breakfastArea.append(h5);
  totalCalories += calories;
  totalCaloriesHTML.textContent = totalCalories;
}

function addLunch(description, calories) {
  const h5 = document.createElement("h5");
  h5.textContent = description + " " + calories;
  lunchArea.append(h5);
  totalCalories += calories;
  totalCaloriesHTML.textContent = totalCalories;
}

function addDinner(description, calories) {
  const h5 = document.createElement("h5");
  h5.textContent = description + " " + calories;
  dinnerArea.append(h5);
  totalCalories += calories;
  totalCaloriesHTML.textContent = totalCalories;
}

function addSnack(description, calories) {
  const h5 = document.createElement("h5");
  h5.textContent = description + " " + calories;
  snackArea.append(h5);
  totalCalories += calories;
  totalCaloriesHTML.textContent = totalCalories;
}

function addExcercise(description, calories) {
  const h5 = document.createElement("h5");
  h5.textContent = description + " " + calories;
  excerciseArea.append(h5);
  totalCalories -= calories;
  totalCaloriesHTML.textContent = totalCalories;
}
