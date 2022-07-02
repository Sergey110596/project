

if(7) {
    console.log('top');
} else {
    console.log('topiko');
}


let num = 30;

(num === 30) ? console.log('Ok') : console.log('top');


for (let i = 5; i < 11; i++){
    console.log(i);  
  }

for (let i = 20; i > 10; i--){
    if (i === 13){
        break;
    }
    console.log(i);
}  

for (let i = 2; i < 11; i++){
    if ( i%2 === 1 ){
        continue;
    }
    console.log(i);
}

let i = 2;
while (i < 10){
    console.log(i);
    i++;
}

let gor = 50;
while(gor < 55){
    console.log(gor);
    gor++;
}


    


    const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);