const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("ul");
const markup = ingredients
  .map(flavor => `<li class="item">${flavor}</li>`)
  .join("");

const addItem = list.insertAdjacentHTML("afterbegin", markup);

// Або без методу insert //

// const makeList = ingredients.forEach((ingredient) =>{ 
// const item = document.createElement("li");
//   item.textContent = `${ingredient}`;
//   list.before(item);
//   item.classList.add("item")
// }
// );

console.log(list);