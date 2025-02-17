// list of all graduating 


// array

let studentNumbers = [
    "2020 - 1923",
    "2020 - 1924",
    "2020 - 1925",
    "2020 - 1926",
    "2020 - 1927"
];

let grades = [98.5, 94.3, 89.2, 90.1];
let computerBrands = ["acer" , "asus", "lenovo", "toshiba"];

console.log(grades);

let mytasks = [
    "drink html",
    "eat javascript",
    "inhale css",
    "bake sass"
];

console.log(mytasks);

// create an array with values from variables

let city1 = "tokyo"
let city2 = "quezon"
let city3 = "jakarta"

let cities = [city1, city2, city3];

console.log(cities);

let arr = [];
arr[3] = "hello";
console.log(arr);
console.log(arr.length);


let fruits = ["apple", "banana", "cherry"];

console.log("Initial Fruit Array: " + fruits);
console.log("Initial Fruit Array length: " + fruits.length);

fruits.length--; 

console.log("Updated Fruit Array: " + fruits);
console.log("Updated Fruit Array length: " + fruits.length);

// array with functions
function displaylength(array){
    console.log(array.length);
}

displaylength(mytasks);
displaylength(["jeff", "matt", "ybanez"]);