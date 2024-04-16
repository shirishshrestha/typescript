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

const User = {
  name: "shirish",
  age: 20,
  isActive: true,
};

// function createUser({ name: string, isPaid: boolean }) {}

// createUser({ name: "shirish", isPaid: true });

function createCourse(): { name: string; isPaid: boolean } {
  return { name: "reactjs", isPaid: true };
}

type User = {
  readonly _id: string;
  name: string;
  age: number;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

let myUser: User = {
  _id: "123",
  name: "shirish",
  age: 20,
  email: "shirishshrestha@gmail.com",
  isActive: true,
};

myUser.age = 21;

type cardNumber = {
  num: string;
};

type cardDate = {
  carddate: string;
};

type cardDetails = cardNumber & cardDate & { cvv: number };

// function createProfile(user: User) {
//   console.log(user.name);
// }

// createProfile({ name: "shirish", age: 20 });

export {};
