const arr = [3, 5, 8, 16, 20, 23, 50];


// const result = [];

// for (let i = 0; i < arr.length; i++){
//     result[i] = arr[i];
// }
// console.log(result);

const data = [5, 10, 'Shopping', 20, 'Homework'];

const result = [];

for (let i = 1; i <= data.length; i++) {
    result[i - 1] = data[data.length - i]
}

console.log(result);





const top = ['aaa', 'bbb', 'ccc', 'ddd', 'iii'];

const atop = [];

for (let i = 1; i <= top.length; i++ ){
    atop[i-1] = top[top.length - i];
}
console.log(atop);


// for (let i = 0; i < data.length; i++ ){
//     if(typeof(data[i]) === 'number'){
//         data[i] = data[i] * 2;
//     } else if(typeof(data[i]) === 'string'){
//         data[i] = `${data[i]} - done`
//     }
// }

// console.log(data);