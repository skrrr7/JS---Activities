// Array Manipulation with array methods

// Three kinds of array methods:

let fruits = ["apple", "orrange", "kiwi", "dragon fruit"];
console.log(fruits);
console.log(fruits.length);

// push
// adds an element in the end of an array
fruits.push("Mango");
console.log(fruits);
console.log(fruits.length);

// add multiple element
fruits.push("banana", "guava");

function addfruit(fruit){
    fruits.push(fruit);
}

addfruit("pineapple");

// pop()
// remove the last element in an array
let removefruit = fruits.pop();
console.log(removefruit);


// splice()
// removes an element from specific index
// syntax: arrayName.splice(startingIndex, deletecount, elementsToBeAdded)
fruits.splice(1,2);


let guestList = ["Alice", "Bob", "Charlie", "David"];
console.log(guestList);

guestList.splice(1, 0, "Eve");
console.log(guestList);

guestList.splice(guestList.indexOf("Charlie"), 1);
console.log(guestList);

guestList.pop();
console.log(guestList);

console.log("Final guest list length:", guestList.length);
