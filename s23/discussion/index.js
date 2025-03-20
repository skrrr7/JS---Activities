// exponent operator

const firstNum = 8 ** 2;
console.log(firstNum);

const secnum = Math.pow(8,2)
console.log(secnum);

// miniActivity
const numbers = [2, 19, 13, 4, 5];
console.log("Random numbers:", numbers);

const transformedNum = numbers.map((num, index) => 
    num % 2 === 0 ? Math.pow(num, index) : Math.pow(num, index + 1)
);

console.log("Transformed numbers:", transformedNum);

//template literals

let name = "jayr"

// pre-template literal string
// single or double quotes
let message = "hello " + name + " welcome";
console.log(message);

// string using template
message = 'hello ${name}';

// mutli line

// mini activity
const students = [
    { name: "Alice", age: 22, hobby: "painting" },
    { name: "Bob", age: 24, hobby: "gaming" },
    { name: "Charlie", age: 20, hobby: "reading" }
];

console.log("Array of student objects:");
console.log(JSON.stringify(students, null, 4));


console.log("\nMulti-line introduction:");
students.forEach(student => {
    console.log(`"${student.name} is ${student.age} years old.\nThey enjoy ${student.hobby}."\n`);
});

// array destructuring

const fullname = ["juan", "dela", "cruz"];

//pre array destructuring

console.log(fullname[0]);
console.log(fullname[1]);
console.log(fullname[2]);

console.log(`hello ${fullname[0]} ${fullname[1]} ${fullname[2]} nice to meet u`);

// array destructuring
const [firsname, midname, lastname] = fullname;
console.log(firsname);
console.log(midname);
console.log(lastname);

// object destructuring


//mini activity
// Step 1: Create the employee object
const employee = {
    fullName: "John Doe",
    department: "Software Engineering",
    projects: [
        { title: "Inventory System", duration: 6 },
        { title: "Mobile Food Delivery App", duration: 8 },
        { title: "E-commerce Website", duration: 12 }
    ],
    skills: ["JavaScript", "UI/UX", "AWS Cloud Computing"]
};

// Step 2: Destructure required values
const { fullName, department } = employee;
const [{ title: firstProjectTitle, duration: firstProjectDuration }] = employee.projects;
const [, , lastSkill] = employee.skills;

// Step 3: Swap the first and last project using destructuring
[employee.projects[0], employee.projects[2]] = [employee.projects[2], employee.projects[0]];

// Step 4: Print the extracted values and updated projects array
console.log(`Employee Name: ${fullName}`);
console.log(`Department: ${department}`);
console.log(`First Project: ${firstProjectTitle} (${firstProjectDuration} months)`);
console.log(`Last Skill: ${lastSkill}`);

console.log("\nUpdated Projects Array:");
employee.projects.forEach(project => {
    console.log(`Title: ${project.title}, Duration: ${project.duration} months`);
});
