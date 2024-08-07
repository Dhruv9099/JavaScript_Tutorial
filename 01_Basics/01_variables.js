/*
    const : cannot be reassigned or redeclared once initialized.
    Use const when you have a value that should not change throughout the execution of your code.
*/
const Account_Id = 52056249956;

// Use let when you need a variable that might change its value.
let Email_id= "Dhruvmaisuriya123@gmail.com";

// Minimize the use of var unless working with legacy code or specific use cases where its function-scoped behavior is necessary.
// prefer not use var beacuse of issue in block scope and functional scope
var Password ="Dhruv@123";
// without any variable
nickname= "DM";
// undefined value
let Account_description ;
// console.log() is a function in JavaScript used to output messages to the console.
console.log(Account_Id);

// console.table() is a method in JavaScript used to display tabular data as a table in the console.
console.table([Account_Id,Email_id,Password,nickname,Account_description]) 

