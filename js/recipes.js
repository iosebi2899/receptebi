import { navigateToRecipe } from "./utils.js";
import { API_BASE_URL, API_KEY } from "./constants.js";

$(".burger-menu").click(function () {
  $(this).toggleClass("menu-on");
  $(".main-navigation").toggleClass("active");
});
$(".main-navigation li a").click(function () {
  $(".main-navigation").removeClass("active");
  $(".burger-menu").removeClass("menu-on");
});

document.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch(
    `${API_BASE_URL}/recipes/random?number=20&tags=dessert&apiKey=${API_KEY}`
  );
  const data = await res.json();

  console.log(data);
  let output = "";
  if (data && data.recipes) {
    data.recipes.forEach((recipe) => {
      output += `

              <div class="white-slide">
                <div class="item recipe" key=${recipe.id}>
                    <img src="${recipe.image}" alt="Avatar" style="width:100%">
                    <div class="container">
                      <h4><b>${recipe.title}</b></h4>
                    </div>
                </div>
              </div>

          `;
    });
  }
  document.querySelector(".all-recipes").innerHTML = output;

  const slides = document.querySelectorAll(".recipe");
  slides.forEach((item) => {
    item.addEventListener("click", (e) => {
      const id =
        e.target.parentElement.parentElement ||
        e.target.parentElement.getAttribute("key") ||
        e.target.getAttribute("key");
      navigateToRecipe(id);
    });
  });
});
