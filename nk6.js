"use strict"

function salamHello (name){
    return (`Привет, ${name} !` )
}

console.log(salamHello('Sergo'));


function chisla(num){
    return [num-1, num, num + 1]
}

console.log(chisla(10));


function zvezda(chisla, num){
    if(typeof(num) !== 'number' || num <= 0){
        return chisla;
    }

    let rex = '';

    for (let i = 1; i <= num; i++){
        if (i === num){
            rex += `${chisla * i}`
        } else {
            rex += `${chisla * i}---`
        }
    }
    return rex;
}

console.log(zvezda (2, 3));


function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

console.log(getMathResult(10, 5));