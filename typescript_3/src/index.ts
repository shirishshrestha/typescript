type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//   (a: number, b: number): number;
// }

let multiply: mathFunction = (a: number, b: number): number => {
  return a * b;
};

console.log(multiply(2, 3));

const total = (...nums: number[]): number => {
  return nums.reduce((a, b) => a + b);
};

console.log(total(1, 2, 3, 4, 5));

const createError = (message: string): never => {
  throw new Error(message);
};

const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

const numberOrString = (value: string | number): string => {
  if (typeof value === "string") {
    return "string";
  }
  if (isNumber(value)) return "number";
  return createError("Invalid input");
};

type One = string;
type Two = string | number;
type Three = "hello";

//convert to more or less specific
let a: One = "hello";
let b = a as Two; // lestt specific
let c = a as Three; // more specific

let d = <One>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "add") as string;

//wrong as TS sees no problem, but the function is returning a string
let nextVal: number = addOrConcat(2, 2, "concat") as number;

10 as unknown as string;

//The DOM

const image = document.querySelector("img") as HTMLImageElement;
const imag = document.querySelector("img")!;
const nextImage = <HTMLImageElement>document.querySelector("img");

image.src;
imag.src;
