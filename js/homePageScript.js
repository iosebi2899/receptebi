import { initializeSlick } from "./slick.js";
import { navigateToRecipe } from "./utils.js";
import { API_BASE_URL, API_KEY } from "./constants.js";

document.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch(
    `${API_BASE_URL}/recipes/random?number=10&tags=dessert&apiKey=${API_KEY}`
  );
  const data = await res.json();

  console.log(data);
  let output = "";
  if (data && data.recipes) {
    data.recipes.forEach((recipe) => {
      output += `

              <div class="white-slide">
                <div class="item" key=${recipe.id}>
                    <img src="${recipe.image}" alt="Avatar" style="width:100%">
                    <div class="container">
                      <h4><b>${recipe.title}</b></h4>
                    </div>
                </div>
              </div>

          `;
    });
  }
  document.querySelector(".center").innerHTML = output;

  const slides = document.querySelectorAll(".item");
  slides.forEach((item) => {
    item.addEventListener("click", (e) => {
      const id =
        e.target.parentElement.parentElement.getAttribute("key") ||
        e.target.parentElement.getAttribute("key") ||
        e.target.getAttribute("key");
      navigateToRecipe(id);
    });
  });

  initializeSlick("center");
});
