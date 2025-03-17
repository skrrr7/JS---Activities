// objects recall

function laptop(name, manufactureDate){
    this.name = name;
    this.manufactureDate = manufactureDate;
}

let laptop1 = new laptop('lenovo', 2008);
console.log(laptop1);

// mini activity

let myLaptop = new laptop('MacBook Air', 2020);
console.log(myLaptop);

// no new keyword
let oldlaptop = laptop("portal RZE", 1980);
console.log(oldlaptop);

let person = {
    //property/key
    name: "john",
    //method
    talk: function(){
        console.log("Hello my name is " + this.name);
    }
}
person.talk();

console.log(person);

person.walk = function(){
    console.log(this.name + "walked 25 steps forward");
}

console.log(person);
person.walk();

// mini activity
let persona = {
    firstname: "johnny",
    lastname: "smith",
    address: "cebu city",
    introduce: function(){
        console.log("Hello my name is " + this.firstname + " " + this.lastname);
    }
}
console.log(persona);
persona.introduce();

//methods can also receive arguments
persona.greet = function(object){
    console.log("HI" + " " + object.name);
}
persona.greet(person);

// real world application

function Student(fullname, email, age){
    this.fullname = fullname;
    this.email = email;
    this.age = age;
    this.subjects = [];
    //methods
    this.enroll = function(subjectName){
        this.subjects.push(subjectName)
        return "enrolled in " + subjectName;
    }
    this.introduction = function(){
        return "Hello I'm " + fullname;
    }
}
let Student1 = new Student("Boyax", "boyax@gmail.com", 20);
let Student2 = new Student("boyet", "boyet@gmail.com", 25);

console.log(Student1);
console.log(Student2);