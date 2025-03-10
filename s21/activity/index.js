// Step 1: Ensure script is linked properly
console.log("Hello World");

/*
    1. In the s21 folder, create an activity folder, an index.html file inside of it, and link the index.js file.
    2. Create an index.js file and console log the message "Hello World" to ensure that the script file is properly associated with the HTML file.
    3. Copy the activity code and instructions from your Instructor into your index.js.
*/

/*
    4. Create an object for a Library User Card with properties such as:
        - userId => A string
        - name => A string
        - age => A number
        - address => A string
        - isActive => A boolean
        - borrowedBooks => An empty array to store titles of books borrowed.
*/

let userCard = {
    userId: "2024-200-A",
    name: "Hunter Helmsley",
    age: 18,
    address: "Louisville, Kentucky",
    isActive: true,
    borrowedBooks: ["History of Pro Wrestling", "Bodybuilding 101"]
};

// Print userCard to match expected output
console.log("userCard:", userCard);


/*
    5. Update the given object for a Library Book Card with properties such as:
        - bookId => A string
        - title => A string
        - description => A string
        - author => A string
        - yearPublished => A string
        - isAvailable => A boolean
*/

let bookCard = {
    bookId: "2010-100-B",
    title: "History of Pro Wrestling",
    description: "A short history of Pro Wrestling around the world.",
    author: "Philip Brooks",
    yearPublished: "2010",
    isAvailable: true,
    datesBorrowed: ["11-11-2021", "12-20-2021", "1-1-2023", "12-19-2024"]
};

// Simulating borrowing the book 3 more times using push()
bookCard.datesBorrowed.push("12-24-2024", "1-1-2025", "1-5-2025");

// Printing the updated array to match expected output
console.log("bookCard's datesBorrowed array after adding 3 more dates:", bookCard.datesBorrowed);



/*
    6. Simulate a scenario where bookCard was borrowed 3 more times.
        - Update the bookCard by adding dates into the bookCard's datesBorrowed array.
        - Use array methods. Don't modify the original array.
*/

