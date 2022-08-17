const form = document.querySelector(`.login-form`);

form.addEventListener(`submit`, onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault(); //страница не перезагружается

    const formEl = event.currentTarget.elements; // ссылка на все элементы

    const mail = formEl.email.value; // доступ к знач єл почті
    const password = formEl.password.value; // доступ к знач єл логина

    if (mail === "" || password === "") { // условие, если поля пустіе
        return alert (`Пожалуйста, заполните пустые поля!`);
    }

    const formData = new FormData(event.currentTarget);       // собрали все введенніе знач
       formData.forEach((value, name) => {
        console.log(`onFormSubmit -> name`, name);
        console.log(`onFormSubmit -> value`, value);
       })
    form.reset(); // очистить поля формі
}
