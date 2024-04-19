const user: (string | number)[] = ["shirish", 1];

let tuple: [string, number, boolean];

tuple = ["shirish", 1, true];

let rgb: [number, number, number] = [255, 0, 0];

type TUser = [string, number];

const newUser: TUser = ["shirish", 1];

newUser[0] = "shirish";
// newUser.push(true);
