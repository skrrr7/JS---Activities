// while loop

let count = 5;

while(count !== 0){
    console.log("While: " + count);

    count--;
}

// do while loop

function demoWhile(number){
    do{
        console.log("Do While: " + number);

        number++;
    }while(number < 10)
}

demoWhile(1);
demoWhile(10);

let num = 10;

while (num >= 1) {
    if (num === 10 || num % 2 !== 0) {
        console.log(num);
    }
    num--;
}

console.log("Done!");
