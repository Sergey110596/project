let result = '';

const length = 10;

for(let i = 1; i < length; i++){
    for(let j = 0; j < i; j++){
        result += "*"
    }
    result +='\n'
}
console.log(result);



const eurCurr = 32;
const usdCurr = 30;

function current (top, port){
    console.log(top * port);
}

current(500, eurCurr);
current(500, usdCurr);



function sayHello(name){
   return `Привет, ${name}!`;
}

console.log(sayHello('Anton'));


returnNeighboringNumbers(5);

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

getMathResult(10, 5);