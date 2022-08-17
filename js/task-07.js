const inputRef = {
    input: document.querySelector(`#font-size-control`),
    span: document.querySelector(`#text`),
};

inputRef.input.addEventListener(`input`, onInputChange);

function onInputChange(event) {
inputRef.span.style.fontSize = event.currentTarget.value + `px`; // `рх` - это пиксель
}