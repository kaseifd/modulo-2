// Ejercicio 1
// console.log("Hola, mundo");


// Ejercicio 2 
// let name = "Marta"
// console.log("Hola " + name);


// Ejercicio 3
// a. 789+34+250443
// b. 2059-79
// c. 3.24*97.856
// d. 1205/12.002

import exactMath from "exact-math";

let a = exactMath.add(789, 34, 250443);
let b = exactMath.sub(2059, 79); 
let c = exactMath.mul('3.24', '97.856');
let d = exactMath.div(1205, '12.002');

console.log(a, b, c, d);


// Ejercicio 4
// import compareNumbers from './compareNumbers.js';

// console.log(compareNumbers(12, 45));


// Ejercicio 6
// import stringLength from "./stringLength.js";
// let string = "Yo trato bien a todos :D"

// console.log(`"` + string + `"` + ` tiene ` +  + stringLength(string) + ` caracteres`);


// Ejercicio 7
// import createArray from "./createArray.js";
// import randomNumber from "./randomNumber.js";

// console.log(createArray(randomNumber));


// Ejercicio 8
// import object from "./exercise8object.js";
// console.log(object.boolean, object.object.c);


// Ejercicio 9
// import isEven from "./isEven.js";
// let randomNumber = parseInt(Math.random() * (100 - 1) + 1)

// console.log(randomNumber, isEven(randomNumber));


// Ejercicio 10
// import showArray from "./showArray.js";
// import { showArrayReverse } from "./showArray.js";

// let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(showArray(myArray));
// console.log(showArrayReverse(myArray));