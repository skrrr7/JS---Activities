console.log("Hello World, It's me again!");

// Best practices in naming variables

// 1. Descriptive
let movieTitle = "The GodFather"; // good variable name

// 2. Start with a lowercase letter
let Lastname = "Smith"; // bad variable name - PascalCase

// 3. Do not add spaces to your variable names. Use specific naming convention (camelCase or snake_case or kebab-case)
let firstName = "Mike";

console.log(firstName);

let email_address = "mikesmith@mail.com";

// 4. Avoid using a variable with a reserved keyword.
// let new = "New addition";
// console.log(new);

// Using the "=" or assignment operator, we can reassign a value to variables created using let.
let productName = "desktop computer";
productName = "Alienware Aurora";
console.log(productName);

// This allow us to declare variables without initial value, then add value later.
let productPrice;
productPrice = 120000;
console.log(productPrice);

// const
// should not be changed

const interest = 3.539;
// interest = 4.489;
// console.log(interest); // Assignment to constant variable error.Lastname

// Data Types

// String used to create text
let myString = "";
let province = "Metro Manila";
let country  = 'Philippines';

console.log(province);
console.log(country);

// Numbers
// Integers/Whole Numbers
let myNumber = 0;
let headCount = 26;
console.log(headCount);

// Decimal Numbers/Floatingpoint Numbers
let grade = 98.7;
console.log(grade);

// Boolean
// true or false
let isMarried = false;
let isGoodConduct = true;

console.log(isMarried);
console.log(isGoodConduct);

// null
let spouse = null;
console.log(spouse);

// undefined
let fullName;
console.log(fullName);

// Arrays
// Special type of data
// store collection of values, and each value in array is associated with a numeric index

// not recommended
// let person = ["Tolits", 18, true, "Quezon City"];
// console.log(person);

let grades = [98.7, 92.1, 90.2, 94.6];
console.log(grades);

/*
    let/constant = objectName = {
        propertyA: value,
        propertyB: value
    }
*/

// Objects

let person = {
    fullName: "Juan Dela Cruz",
    age: 35,
    isMarried: false,
    contact: ["+639171234567", "81234567"],
    address: {
        houseNumber: '345',
        city: 'Manila'
    }
}

console.log(person);