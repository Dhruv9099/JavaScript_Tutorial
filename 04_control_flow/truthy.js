// 
const userEmail ="dhruvmaisuriya123@gmail.com";

if (userEmail){
    console.log("Got User Email");
} else{
    console.log("Dont have the User Email");
}

// 
const userEmails ="";

if (userEmails){
    console.log("Got User Email");
} else{
    console.log("Dont have the User Email");
}

// 
const userEmailss= [];

if (userEmailss){
    console.log("Got User Email");
} else{
    console.log("Dont have the User Email");
}


// ````````````truthy values``````````````
/*
true,"0",'false'," ",[],{},function(){}
*/


// ````````````falsy values``````````````
/*
false, 0,-0, BigInt on,"",null,undefined,NaN
*/

if(userEmailss.length ===0){
    console.log("Array is empty");
}

const emptyobj={f:2,}
if (Object.keys(emptyobj).length===0){
    console.log("object is empty");
}else{
    console.log("object is not empty");
}

// `````````````` Nullish Coalescing Operator (??) ``````````````
let val1 ;
val1= 5 ?? 10
console.log(val1);

let val2;
val2 =null ?? 10
console.log(val2);

let var3 ;
var3= undefined ?? 15
console.log(var3)

let val4;
val4 = null ?? 10 ??20 
console.log(val4);


// `````````````` Terniary Operator ````````````

// // condition ? true :false

const iceTeaPrice =1000
iceTeaPrice>=800 ? console.log("More than 800") : console.log("Less than 800");

const iceTeaPrices = 700
iceTeaPrices>=800 ? console.log("More than 800") : console.log("Less than 800");
  