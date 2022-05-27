'use strict';

let num = 50;

/* while (num <= 55) {
    console.log(num);
    num++;
} */

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        /* break; */
        continue;
    }
    console.log(i);
}

for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j); 
    }
}

let result = '';
const length1 = 7;

for (let i = 1; i < length1; i++) {

    for (let j = 0; j < i; j++) {
        result += '*';
    }

    result += '\n';
}
console.log(result);

first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) {
                break first;}
            console.log(`Third level: ${k}`);
        }
    }
}

for (let i = 5; i < 11; i++ ) {
    console.log(i);
}

for (let i = 20; i > 9; i--) {
    if (i === 13) {
        break;
    }
    console.log(i);
}

for (let i = 1; i < 11; i++) { 
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);   
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let num2 = 2;
while (num2 < 16) {
    num2++;
    if (num2 % 2 === 0) {
        continue;
    }
    console.log(num2);
}


function fifthTask() {
    const arrayOfNumbers = [];
    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }
    
    // Не трогаем
    return arrayOfNumbers;
}

fifthTask();


function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    
    
    // Не трогаем
    console.log(result);
}

firstTask();

function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) == 'number') {
            data[i] = data[i] * 2;
        } else {
            data[i] = `${data[i]} - done`;
        } 
    }
    console.log(data);
    // Не трогаем
    return data;
}

secondTask();

function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    for (let i = 1; i <= data.length; i++) {
        result[i - 1] = data[data.length - i];
    }
    // Не трогаем
    return result;
}

thirdTask();

const lines = 5;
let result1 = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result1 += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result1 += "*";
    }
    result1 += "\n";
}

console.log(result1);