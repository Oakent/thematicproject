// Function to create a new ingredient field element
function createIngredientField(ingredients) {
  const ingredientField = document.createElement("div");
  ingredientField.classList.add("ingredient-field");

  const ingredientSelect = document.createElement("select");
  ingredientSelect.name = "ingredient[]";
  ingredientSelect.required = true;

  const optionDefault = document.createElement("option");
  optionDefault.value = "";
  optionDefault.innerText = "Select Ingredient";
  ingredientSelect.appendChild(optionDefault);

  ingredients.forEach((ingredient) => {
    const optionIngredient = document.createElement("option");
    optionIngredient.value = ingredient.id;
    optionIngredient.innerText = `${ingredient.name} - ${ingredient.unit}`;
    ingredientSelect.appendChild(optionIngredient);
  });

  const quantityInput = document.createElement("input");
  quantityInput.type = "number";
  quantityInput.name = "quantity[]";
  quantityInput.min = 1;
  quantityInput.required = true;

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-ingredient");
  removeButton.innerText = "Remove";

  ingredientField.appendChild(ingredientSelect);
  ingredientField.appendChild(quantityInput);
  ingredientField.appendChild(removeButton);

  return ingredientField;
}

// Add event listener to the "Add Ingredient" button
document
  .getElementById("add-ingredient-btn")
  .addEventListener("click", function () {
    const ingredientContainer = document.getElementById("ingredient-container");
    const newIngredientField = createIngredientField(ingredients);
    ingredientContainer.appendChild(newIngredientField);
  });

// Event delegation for removing ingredient fields
document
  .getElementById("ingredient-container")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-ingredient")) {
      event.target.parentNode.remove();
    }
  });
