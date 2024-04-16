var shirish = { name: "shirish", id: 1 };
shirish = { username: "shirish", id: 1 };
function getData(id) {
    if (typeof id === "string") {
        id.toLowerCase();
        console.log(id);
    }
    else {
        console.log(id);
    }
}
getData(1);
//array
var data = [1, 2, 3, 4, 5];
var data1 = ["shirish", "shirish", "shirish"];
var data2 = ["shirish", "shirish", "shirish", 1, 2, 3];
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew";
console.log(seatAllotment);
