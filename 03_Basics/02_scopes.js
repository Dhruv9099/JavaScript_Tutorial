// let a =5
// const b= 10
// var c = 15
// console.log(a);
// console.log(b);
// console.log(c);

function One (){
  const Name ="Dhruv"

  function Two(){
    const Surname ="Maisuria"
    console.log(Name)
    
  console.log(Surname)
  }
  
  // console.log(Surname)
  Two()
}
One()


// 
function addone(num){
  return num+1
}
console.log(addone(5))

const addtwo = function(num){
  return num+1
}
console.log(addtwo(5))






















// scopes.js

// Global scope variable
let globalVar = "I'm in the global scope";

function demonstrateScopes() {
  // Function scope variables
  let functionVar = "I'm in the function scope";
  console.log(functionVar); // Accessible within this function

  if (true) {
    // Block scope variables (inside if block)
    let blockVar = "I'm in the block scope";
    console.log(blockVar); // Accessible within this block
  }

  // Can't access blockVar here
  // console.log(blockVar); // This would cause an error

  console.log(globalVar); // Accessible within this function
}

console.log(globalVar); // Accessible outside the function

// Trying to access functionVar or blockVar here would cause errors
// console.log(functionVar);
// console.log(blockVar);

demonstrateScopes(); // Call the function to see scopes in action
