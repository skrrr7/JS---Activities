//console.log("This is s08");

// understanding scope in javascript

// global scope

const globalVar = "Im a globalVar";

function displayGlobal(){
    console.log(globalVar);
}

displayGlobal();
console.log(globalVar);

// local scope

    // function scope
    function localFunction(){
        let localVar = "Im a localVar";
        console.log(localVar);
    }
    localFunction();
    // console.log(localVar);

    // block scope
    {
        const blockVar = "Im a block-scoped"
        console.log(blockVar);
    }
    // console.log(blockVar);


// return statement

function returnFullname(){
return "Jeffrey" + " " + "smith";
}

let fullname = returnFullname();
console.log(fullname);

// console.log vs return statement

function returnAdd(){
    let fullAdd = {
        strt: "cebu",
        city: "cebu city",
        province: "cebu"
    };

    return fullAdd;
}

let myAdd = returnAdd();
console.log(myAdd);


function returnSumNumbers(){
    return 5 + 10;
}

let sumOf5and10 = returnSumNumbers();
console.log(sumOf5and10);

let total = 100 + returnSumNumbers();
console.log(total);



