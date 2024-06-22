// if conditional 

// if (condition){
//     scope
// }

// if (true){
//     code will execute
// }

// if (false){
//     code will not execute
// }

const isuserloggedin = true
if (isuserloggedin) {
    console.log("welcome home");
}
// strict equal  check also datatype
if (2 === "2") {
    console.log("not Exceuted");
}

if (2 == "2") {
    console.log("Exceuted");
}




//  ex- 2
const temp = 21;
if (temp > 50) {
    console.log("more than 50 ");
} else {
    console.log("temperature is 21")
}

// ex -3

const score = 200
if (score > 100) {
    const power = "fly"
    console.log(`user power: ${power}`);
}

// short hand  not usually writing in everywhere 
const balance = 1000
if (balance > 500) console.log("balance more than 500");

// ex-2
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}


//  EX-3

const userLoggedInWeb = true;
const debitCard =true
const loggedInFromGoogle= false;
const loggedInFromEmail = true


// and statement  all condi. true
if(userLoggedInWeb && debitCard && 2==2){
    console.log("Allow to Buy Course");
}

// or statement
if (loggedInFromEmail || loggedInFromGoogle){
    console.log(`userlogged in `);
}