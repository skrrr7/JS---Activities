let allstars = [
    "kobe",
    "bryan",
    "jordan"
];

console.log(allstars);

console.log("length of all stars: ");
console.log(allstars.length);

allstars.length = allstars.length - 1;

console.log("updated length: ");
console.log(allstars.length);


// accessing arrays

console.log(allstars[0]);
console.log(allstars[1]);

let lakers = ["kobe", "kareem", "bryan"];

console.log(lakers[2]);

let currLakers = lakers[2];
console.log(currLakers);

console.log("array before reassign");
console.log(lakers);

lakers[2] = "gasol";
console.log(lakers);


let numArr = [5, 12, 30, 46, 40];

function isAllDivisibleBy5(array) {
    let allDivisible = true;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 5 !== 0) {
            console.log("Not divisible by 5 at index: " + i);
            allDivisible = false;
        }
    }
    return allDivisible;
}
console.log(isAllDivisibleBy5(numArr));
