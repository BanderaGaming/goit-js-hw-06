const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("ul");
const elements = ingredients.map(el => {
  const ingredientListItem = document.createElement('li');
  ingredientListItem.classList.add("item");
  ingredientListItem.textContent = el;
  return ingredientListItem;
});

list.append(...elements);
console.log(list)