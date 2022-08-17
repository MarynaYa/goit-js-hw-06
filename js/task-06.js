const inputRef = document.querySelector(`#validation-input`);

inputRef.addEventListener(`blur`, onInputBlur);

function onInputBlur(event) {
    const input = event.currentTarget; // сілка на знач импут
    const inputLength = Number(input.dataset.length); // 6 -длина импута
if (input.value.length === inputLength) { // сравнение установл длині с введенной
    input.classList.add(`valid`);
    input.classList.remove(`invalid`);
} else {
    input.classList.add(`invalid`);
    input.classList.remove(`valid`);
}

};