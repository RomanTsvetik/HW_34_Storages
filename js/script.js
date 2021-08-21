"use strict"

//1. Собрать данные с формы при ее сабмите

document.querySelector('#form')
    .addEventListener('submit', event => {
        event.preventDefault(); // отменяем дефолтные события 

        const data = {};

        const inputs = event.target.querySelectorAll('input, select, textarea');

        let checkbox = document.querySelector('input[type=checkbox]');
        if (!checkbox.checked) alert('Вы не согласны с условиями?');
        
        for (let input of inputs) {            
            data[input.name] = input.value;

            //4. Если данных нет, то показать соответствующее сообщение
            if (input.value.length === 0) alert(`Вы не ввели ${input.name}`);
        }

//2. Сохранить эти данные в качестве объекта внутри localStorage(не забываем о преобразовании в json)
        
        localStorage.setItem('formData', JSON.stringify(data));

        //
        redirectToNewPage();
    });

document.addEventListener('DOMContentLoaded', (e) => {

    const data = JSON.parse(localStorage.getItem('formData')) // JSON.parse - создает из строки объект 
    const inputs = document.querySelectorAll('#form-example input, #form-example select, #form-example textarea');

    for (let input of inputs) {
        input.value = data[input.name];
    }
    
});

// перевод на другую строку 
function redirectToNewPage() {
    window.location.href = "/files/files/data_list/index_data_list.html";
}




