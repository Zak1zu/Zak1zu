'use strict';

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 10;
}

showFirstMessage("Hello World");
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log("Hello");
};

logger();

const calc1 = (a, b) => a + b;



const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert (amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) {
            return;
        }
    }
    console.log('Done');
}

test();


function doNothing() {}
console.log(doNothing() === undefined);

function sayHello(name) {
    return ('Привет ' + name);
}

sayHello('Антон');

function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

returnNeighboringNumbers(5);

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }   

    let str = '';
    
    for (let i = 1; i <= times; i++) {
        str += `${num * i}`;
        if (i === times) {
            break;
        } 
        for (let j = 0; j <= 2; j++) {
            str += '-';
        }   
    }
    console.log(str);
}   

getMathResult(5, 3);

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
        } else {
            str += `${num * i}---`;
        }
    }
    console.log(str);
    return str;
}

getMathResult(5, 3);