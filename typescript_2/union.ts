type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let shirish: User | Admin = { name: "shirish", id: 1 };

shirish = { username: "shirish", id: 1 };

function getData(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
    console.log(id);
  } else {
    console.log(id);
  }
}

getData(1);

//array

const data: number[] = [1, 2, 3, 4, 5];
const data1: string[] = ["shirish", "shirish", "shirish"];
const data2: (string | number)[] = ["shirish", "shirish", "shirish", 1, 2, 3];

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew";

console.log(seatAllotment);
