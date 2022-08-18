function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector(`button.change-color`); //находим и достучимся до кнопки
const spanElem = document.querySelector(`span.color`);
const body = document.querySelector(`body`);

btn.addEventListener(`click`, onBtnChange); // привязіваем на кнопку функционал

function onBtnChange(event) {
  const colorEl = getRandomHexColor();
  body.style.backgroundColor = colorEl; // при нажатии на кнопку кнопка принимает рандомеій цвет
  spanElem.textContent = colorEl; // при изменение цвета - значание цвета ввіводится в спан
}

