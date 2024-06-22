// # Primitive :
// 7 types : String ,Number ,Boolean,null,undefined,symbol,BigInt
/*
Primitive Data Types:

1. Number: Represents numeric values, both integers and floating-point numbers.

2. String: Represents sequences of characters, enclosed within single or double quotes.

3. Boolean: Represents a logical entity and can have two values: true or false.

4. Undefined: Represents a variable that has been declared but not assigned a value.

5. Null: Represents an intentional absence of any object value.


Special Data Types:
6. Symbol: Introduced in ECMAScript 6, symbols are unique and immutable primitive values that can be used as the key of an object property.
7. BigInt:

// # Reference or Non - Primitive :

Composite Data Type:
1. Object: Represents a collection of key-value pairs where values can be of any data type (including other objects), and properties can be added, updated, or deleted.


Derived Data Types:
2. Function: Functions are a special type of object used for executing a block of code.

3. Array: A special type of object used to store multiple values in a single variable, accessed through numeric indices.

4. Date: Represents dates and times.

*/


//  Stack (Premitive ) , Heap(Non- Primitive)
let myName = "DHRUVMAISURIA"
let anotherName = myName

console.log(anotherName);

let userone ={
    email: "user@gamil.com",
    upi:"dhriowigi@upi"
}
console.log(userone);
let usertwo =userone

usertwo.email ="dhurv@gmail.com"
console.log(usertwo);
console.log(userone);
