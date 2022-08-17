const categoriesEl = document.querySelector(`#categories`);
const itemEl = categoriesEl.children;
console.log(`Number of categories:`, itemEl.length);

const categoriesItemEl = document.querySelectorAll(`.item`);
for (let i = 0; i < categoriesItemEl.length; i += 1) {
const titleCategoriesItemEl = categoriesItemEl[i].children;
//console.log(titleCategoriesItemEl);

const nameCategoriesEl = titleCategoriesItemEl[0].textContent;
console.log(`Category:`, nameCategoriesEl);

const categoriesLengthEl = categoriesItemEl[i].lastElementChild.children;
console.log(`Elements:`, categoriesLengthEl.length);
};



