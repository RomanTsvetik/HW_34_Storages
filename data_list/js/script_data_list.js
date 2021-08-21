"use strict"

//3. Создать второй html файл, в котором списком(ul > li) вывести вывести все те данные, которые пользователь ввел в форму ранее

let obj = JSON.parse(localStorage.getItem('formData'));

let ul = document.createElement('ul');
ul.innerHTML = ('Information details are following:')

function createDataList(obj) {
    
    for (let key in obj) {
        
        let li = document.createElement('li');

        li.innerHTML = (`${key} : ${obj[key]}`);
        ul.append(li);
    }
    
    return ul;
}

document.body.append(ul);

createDataList(obj);