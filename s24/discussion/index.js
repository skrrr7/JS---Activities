// arrow function

const hello = () => {
    console.log("hello world");
}

//function expression
function funcExpression(){
    console.log("Hello");
}

// arrow functions with template literals

let printName = (fname,mname,lname) =>{
    console.log(`${fname} ${mname} ${lname}`)
};

printName("john","doe","smith")

//implicit return statement

// class based objects blueprints

//mini activity
class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    getInfo = () => `${this.name} belongs to the ${this.category} category and costs Php ${this.price}.`;

    applyDiscount(discount) {
        this.price -= this.price * (discount / 100);
        return `Price after discount: Php ${this.price}`;
    }
}

const laptop = new Product("Gaming Laptop", 45000, "Electronics");
console.log(laptop.getInfo());
console.log(laptop.applyDiscount(10));
