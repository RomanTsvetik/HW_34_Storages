"use strict"

//3. Создать второй html файл, в котором списком(ul > li) вывести вывести все те данные, которые пользователь ввел в форму ранее

const obj = JSON.parse(localStorage.getItem('formData'));

const ul = document.createElement('ul');
ul.innerHTML = ('Information details are following:');

(() => {
    for (let key in obj) {
        
        const li = document.createElement('li');

        li.innerHTML = (`${key} : ${obj[key]}`);
        ul.append(li);
    }
    return ul;

})(obj);

document.body.append(ul);

