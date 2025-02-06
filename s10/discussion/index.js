// multiple parameters

function createFUll(middlename,lastname,firstname){
    console.log(firstname + ' ' + lastname + ' ' + middlename);
}

createFUll('juan', 'delacalzada', 'cruz');
createFUll('juan', 'delacalzada');

// using variables as arguments

let firstname = "john";
let middlename = "doe";
let lastname = "smith";

createFUll(firstname, middlename, lastname);

function printFull(middlename, firstname, lastname){
    console.log(firstname + " " + middlename + " " +lastname);
}

printFull("john","doe,","smith")



