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
