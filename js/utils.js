export const navigateToRecipe = (id) => {
  localStorage.setItem("recipeId", JSON.stringify(id));

  if (localStorage.getItem("recipeId") !== "null") {
    if (window.location === ` recipes-details.html`) {
      window.location.reload();
    } else {
      window.location = ` recipes-details.html`;
    }
  }
};
