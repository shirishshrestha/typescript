"use strict";
// interface mathFunction {
//   (a: number, b: number): number;
// }
let multiply = (a, b) => {
    return a * b;
};
console.log(multiply(2, 3));
const total = (...nums) => {
    return nums.reduce((a, b) => a + b);
};
console.log(total(1, 2, 3, 4, 5));
const createError = (message) => {
    throw new Error(message);
};
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
const numberOrString = (value) => {
    if (typeof value === "string") {
        return "string";
    }
    if (isNumber(value))
        return "number";
    return createError("Invalid input");
};
//convert to more or less specific
let a = "hello";
let b = a; // lestt specific
let c = a; // more specific
let d = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "add");
//wrong as TS sees no problem, but the function is returning a string
let nextVal = addOrConcat(2, 2, "concat");
10;
//The DOM
const image = document.querySelector("img");
const imag = document.querySelector("img");
const nextImage = document.querySelector("img");
image.src;
imag.src;
