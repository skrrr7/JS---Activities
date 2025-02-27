// mutators

//combined multiple arrays

let carBrands = ["toyota", "nissan", "ford", "ferari"];
let isExist = carBrands.includes("ford");
let isExist1 = carBrands.includes("chevrolet");

console.log("Result of includes method: ");
console.log(isExist);
console.log(isExist1);

//mini activity

let guestList = ["Alice", "Bob", "Charlie", "David", "Eve"];

let isCharlieOnList = guestList.includes("Charlie");
console.log("Guest list:", guestList.join(","));
console.log("Is Charlie on the list?", isCharlieOnList);

let davidIndex = guestList.indexOf("David");
console.log("David index number is:", davidIndex);

let firstAndLastGuests = [guestList[0], guestList[guestList.length - 1]];
console.log("First and last guests:", firstAndLastGuests.join(","));
