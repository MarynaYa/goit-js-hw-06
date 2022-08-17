let counterValue = 0;
const valueEl = document.querySelector(`#value`);
//const counterClick = document.querySelector(`#counter`);
const decrementClick = document.querySelector(`[data-action="decrement"]`);
const incrementClik = document.querySelector(`[data-action="increment"]`);

decrementClick.addEventListener(`click`, () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

incrementClik.addEventListener(`click`, () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
