//console.log("Hello World");

// If, else if, and else statement

let numG = -1;

// if statement

if(numG < 0){
    console.log("Hello");
}

numG = 0;
if(numG < 0){
    console.log("Hello");
}

// else if 
let numH = 1;
if(numH < 0){
    console.log("Hello");
}else if (numH > 0){
    console.log("world");
}

//else statement
if(numH < 0){
    console.log("Hello");
}else if(numH == 0){
    console.log("world");
}else{
    console.log("Again");
}

function determineTyphoonIntensity(windSpeed) {
    if (windSpeed < 30) {
        return "Not a typhoon yet.";
    } else if (windSpeed <= 61) {
        return "Tropical depression detected.";
    } else if (windSpeed <= 88) {
        return "Tropical storm detected.";
    } else if (windSpeed <= 117) {
        return "Severe tropical storm detected.";
    } else {
        return "Typhoon detected.";
    }
}

console.log(determineTyphoonIntensity(224)); 

let message = determineTyphoonIntensity(90);

if (message == "Severe tropical storm detected"){
    console.log(message);
}

if("false"){
    console.log(true);
}else{
    console.log(false);
}

// truthy and falsy

if(true){
    console.log('truthy');
}

if(1){
    console.log('truthy');
}

if({}){
    console.log('truthy');
}

// falsy
if(false){
    console.log('falsy');
}

if(0){
    console.log('falsy');
}

if(undefined){
    console.log('falsy');
}

// ternary operator

// single statement execution
let ternaryResult = (1 < 18) ? true : false;
console.log("Result of ternary operator: " + ternaryResult);

// multiple statement execution
let name1;
let age = 19;

function  isOfLegalAge(){
    name1 = "John";
    return "you are of the legal age limit";
}

function isUnderAge(){
    name1 = "jane";
    return "you are of the under age limit";
}

let legalage = (age > 18) ? isOfLegalAge() : isUnderAge();
console.log("Result of ternary operator in functions: " + legalage + ", " + name1);




























