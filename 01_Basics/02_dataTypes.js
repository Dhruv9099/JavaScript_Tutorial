/*
Primitive Data Types:

Number: Represents numeric values, both integers and floating-point numbers.

String: Represents sequences of characters, enclosed within single or double quotes.

Boolean: Represents a logical entity and can have two values: true or false.

Undefined: Represents a variable that has been declared but not assigned a value.

Null: Represents an intentional absence of any object value.


Special Data Types:
Symbol: Introduced in ECMAScript 6, symbols are unique and immutable primitive values that can be used as the key of an object property.


Composite Data Type:
Object: Represents a collection of key-value pairs where values can be of any data type (including other objects), and properties can be added, updated, or deleted.


Derived Data Types:
Function: Functions are a special type of object used for executing a block of code.

Array: A special type of object used to store multiple values in a single variable, accessed through numeric indices.

Date: Represents dates and times.

*/

// Number:
let num = 42;
console.log(typeof num);
console.log("Number Data type: " + num);  // Output: 42

let pi = 3.14;
console.log("Number Data type: " + pi);   // Output: 3.14
console.log("   ");


// String:

let greeting = " String Data type: Hello, World!";
console.log(typeof greeting);
console.log(greeting);  // Output: String Data type: Hello, World!

let name = 'Alice';
console.log("String Data type: "+ 'Welcome, ' + name);  // Output: Welcome, Alice
console.log("");

// Boolean:

let isRaining = true;
console.log(typeof isRaining);

console.log(isRaining);  // Output: true

let isLoggedIn = false;
console.log(isLoggedIn); // Output: false
console.log("");

// Undefined:

let undefinedVariable;
console.log(typeof undefinedVariable);

console.log(undefinedVariable);  // Output: undefined
console.log(" ");

// Null:

let nullValue = null;
console.log(typeof nullValue);

console.log(nullValue);  // Output: null
console.log("");


// Symbol:

const sym1 = Symbol('foo');
const sym2 = Symbol('foo');
console.log(typeof sym1,sym2);

console.log(sym1 === sym2);  // Output: false (symbols are unique)
console.log(" ");

// Object:

let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['reading', 'traveling'],
    address: {
        street: '123 Main St',
        city: 'Anytown'
    }
};
console.log(typeof person);

console.log(person.firstName);  // Output: John
console.log(person.hobbies[0]);  // Output: reading

console.log(" ");
// Function:

function add(a, b) {
    return a + b;
}
console.log(typeof add);

console.log(add(5, 3));  // Output: 8
console.log(" ");

// Array:

let colors = ['red', 'green', 'blue'];
console.log(typeof colors);

console.log(colors[0]);  // Output: red

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.length);  // Output: 5
console.log(" ");

// Date:

let currentDate = new Date();
console.log(typeof currentDate);

console.log(currentDate);  // Output: Current date and time
console.log(" ");