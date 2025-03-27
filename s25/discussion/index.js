// JSON


let batchesArr = [{batchname: "batchX"}, {batchname: "batchY"}]
console.log(batchesArr);

console.log("Result from stringfy method: ");
console.log(typeof JSON.stringify(batchesArr));
console.log(JSON.stringify(batchesArr));

let data = JSON.stringify({
    name: "john",
    age: 31,
    address: {
        city: "manila",
        country: "ph"
    }
})

console.log(data);

//json.parse

let parseData = JSON.parse(data);

console.log("this is after the parse");
console.log(parseData);