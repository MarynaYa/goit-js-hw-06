function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnCollection = document.querySelector(`#boxes`); // получаем доступ к имеющимся єл.
const ref = {
  id: document.querySelector(`#controls`),
  input: document.querySelector(`input`),
  btnCreate: document.querySelector(`[data-create]`),
  btnDestroy: document.querySelector(`[data-destroy]`),
}

ref.btnCreate.addEventListener('click', onInputClick); // добавляем на btn фун-нал
function onInputClick(event) {           // фун-ция добавляем єлементі  при клике
 const newDiv = Number(ref.input.value);
 createBoxes(newDiv);
};


function createBoxes(amount) {   // создаем коллекцию єлементов
 //ref.input = amount;
 const width = 30;  
 const height = 30;
 let addValue = 0;

 const elements = [];  // массив єлементов, которій будем добавлять

 for (let i = 0; i < amount; i += 1) {
 /*amount[i] = getRandomHexColor();*/

const divEl = document.createElement(`div`);  // создали новій div
divEl.classList.add(`box`)
divEl.style.backgroundColor = getRandomHexColor();
divEl.style.width = width + addValue + `px`;  
divEl.style.height = height + addValue + `px`;
addValue += 10;                  // увеличиваем значание ширині/вісоті єл. в цикле на +10
elements.push(divEl);          // добавляем єл. в массив
 }
 btnCollection.append(...elements); // добавлили в html
};

ref.btnDestroy.addEventListener(`click`, destroyBoxes);  // добавляем на btn фун-нал удалять
function destroyBoxes() {     
btnCollection.innerHTML = "";
}
