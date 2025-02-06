console.log("S09 discussion");

// Function and Parameters

function printName(name){
    console.log("My name is " + name);
}

printName("Juana");
printName("John");

let sampleVariable = "jane";
printName(sampleVariable);

function checkDiv(num){
    let rem = num%8;
    console.log("the remainder of " + num + " divided by 8 is:  " + rem);
    let div8 = rem === 0;
    console.log("Is " + num + " divisible by 8?");
    console.log(div8);
}

checkDiv(64);
checkDiv(28);

