let a: number = 12;
let b: number = 6;
let c: number = 2;

console.log(a / b);

console.log(c * b);

function addTwo(num: number): number {
  return num + 2;
}

console.log(addTwo(2));

function getUpper(val: string) {
  return val.toUpperCase();
}

console.log(getUpper("shirish"));

function signUpUser(name: string, email: string, isPaid: boolean) {}
console.log(signUpUser("shirish", "shirish@gmai.com", false));

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

// function getValue(myVal: number) {
//   if (myVal > 10) {
//     return myVal;
//   } else {
//     return false;
//   }
// }

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errorMsg: string): void {
  console.log(errorMsg);
}

function handleError(errorMsg: string): never {
  throw new Error(errorMsg);
}
