console.log("Hello world");

// js type coercion
let numA = '10';
let numB = 12;

let coercion = numA + numB;
console.log(coercion);
console.log(typeof coercion);

coercion = numA * numB;
console.log(coercion);
console.log(typeof coercion);

let coercionTrue = true + 1;
console.log(coercionTrue);
console.log(typeof coercionTrue);


let coercionFalse = false + 1;
console.log(coercionFalse);
console.log(typeof coercionFalse);

let coercionObj = [] == [];
console.log("coercionObj: " + coercionObj);

console.log(1 === 1);
console.log(1 === 2);
console.log(1 === '1');
console.log(0 === false);
// inequality operator
console.log(1 !== 1);
console.log(1 !== 2);
console.log(1 !== '1');
console.log(0 !== false);

// comparison operator
let a = 50;
let b = 65;

//greater than operator
let isGreaterThan = a > b;
//less than operator
let isLessThan = a < b;
// greater than or equal 
let isGTorEqual = a >= b;
// less than or equal operator
let isLTorEqual = a <= b;

console.log(isGreaterThan);
console.log(isLessThan);
console.log(isGTorEqual);
console.log(isLTorEqual);

let numStr = "50";
console.log(a >= numStr);
console.log(b <= numStr);

let str = "twenty";
console.log(b >= str);

console.log(b * str);

// logical operators
let isLegalAge = true;
let isRegistered = false;

// AND operator
let allReq = isLegalAge && isRegistered;
console.log("Result: " + allReq);

// OR operator
let somReq = isLegalAge || isRegistered
console.log("Result: " + somReq);

// NOT operator
let somReqy = !isRegistered;
console.log("Result: " + somReqy);