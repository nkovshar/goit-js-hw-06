const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsItem = ingredients.map(ingredient => { 
const ingredientEl = document.createElement('li');
  ingredientEl.classList.add('item');
  ingredientEl.textContent = ingredient;
  return ingredientEl;
})

const ingredientList = document.querySelector('#ingredients');
ingredientList.append(...ingredientsItem);