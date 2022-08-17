const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector(`ul`);

const elements = ingredients.map(option => {
const itemEl = document.createElement(`li`);
itemEl.classList.add(`item`);
itemEl.textContent = option;

return itemEl;
}
);
console.log(elements);

ingredientsEl.append(...elements);




