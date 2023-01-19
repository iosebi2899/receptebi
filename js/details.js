import { API_BASE_URL, API_KEY } from "./constants.js";
import { navigateToRecipe } from "./utils.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const recipeImg = document.querySelector(".recipe-img");
    const recipeTitle = document.querySelector(".recipe-title");
    const recipeTime = document.querySelector(".recipe-time");
    const healthScore = document.querySelector(".health-score");
    const recipeSummary = document.querySelector(".recipe-summary");
    const recipeId = JSON.parse(localStorage.getItem("recipeId"));

    if (window.location === ` recipes-details.html` && recipeId === null) {
      window.location = `index.html`;
    }

    const singleItemResponse = await fetch(
      `${API_BASE_URL}/recipes/${recipeId}/information?apiKey=${API_KEY}`
    );

    const singleItem = await singleItemResponse.json();
    if (singleItem) {
      recipeImg.src = singleItem.image;
      recipeTitle.innerHTML = singleItem.title;
      recipeTime.innerHTML = `Ready in: ${singleItem.readyInMinutes} minutes`;
      healthScore.innerHTML = `Health score: ${singleItem.healthScore}`;
      recipeSummary.innerHTML = singleItem.summary;
    }

    const response = await fetch(
      `${API_BASE_URL}/recipes/${recipeId}/similar?number=6&apiKey=${API_KEY}`
    );

    const similarrecipes = await response.json();
    if (similarrecipes) {
      let output = "";
      similarrecipes.forEach((recipe) => {
        output += `

        <div class="white-slide">
            <div id=${recipe.id} class="item similar">
                <div class="container">
                <h4><b>${recipe.title}</b></h4>
                </div>
            </div>
        </div>

    `;
      });
      document.querySelector(".similars").innerHTML = output;
    }
  } catch (e) {
    window.location = `index.html`;
    console.log(e);
  }

  const similars = document.querySelectorAll(".similar");
  similars.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      const id =
        e.target.parentElement.parentElement.parentElement.getAttribute("id") ||
        e.target.getAttribute("id");

      navigateToRecipe(id);
    });
  });
});
