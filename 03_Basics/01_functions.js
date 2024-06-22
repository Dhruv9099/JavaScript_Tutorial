
function SayMyName(){
    console.log("D");
    console.log("h");
    console.log("r");
    console.log("u");
    console.log("v");
}
// SayMyName
// SayMyName()


function addTwoNumbers(number1,number2){
   console.log(number1 + number2); 
}

addTwoNumbers(2,5)
addTwoNumbers(2,"5")
addTwoNumbers(2,"a")
addTwoNumbers(2,)

const result = addTwoNumbers(3,5)
console.log("Result: ", result);

// take another example

// write like this 1
function addTwoNum(num1,num2){
    let result = num1+ num2
    return result
}
const results =addTwoNum(3,5)
console.log("Result: ", results);


// write like this 2
function addTwoNums(num1,num2){
    return num1+ num2
}
const res =addTwoNums(3,5)
console.log("Result: ", res);



// scope


//  without if else
function LoginUserMessage(username){
    return `${username} just logged In.`
}

console.log(LoginUserMessage("DHRUV"))
console.log(LoginUserMessage(""))
console.log(LoginUserMessage())

// with if else

function loginUser(user){
    if (user === undefined){
        console.log("please enter user");
        return
    }
    {
        console.log(`${user} just logged In.`)
    }
}
console.log(loginUser("DHRUV"))
console.log(loginUser())

// second method

function login(usernames){
    if(!usernames){
        console.log("please enter a usernames");
        return
    }
    return `${usernames} just LOGGED IN`
}

console.log(login("DHRuv"));
console.log(login(""));

//  third method

function loginusername(username="DHRUVMAISURIA"){
    if(!username){
        console.log("please enter a usernames");
        return
    }
    return `${username} just LOGGED IN`
}
console.log(loginusername("DHRUV"))
console.log(loginusername())
console.log(loginusername(""))

// rest spread operator
function calculateCartPrice(...numbers1){ // [... rest operator retrun in array format]
    return numbers1
}
console.log(calculateCartPrice(200,500,122));

function calculateCartPrices(val1, val2,...numbers1){ // [... rest operator retrun in array format]
    return val1,val2,numbers1
}
console.log(calculateCartPrices(200,500,122,512,842,726));


const user ={
    useername:"DHRUV",
    prices:999
} 
function handleObject(anyobject){
    console.log(`username is ${anyobject.useername} and price is ${anyobject.prices}`);

}
handleObject(user)

handleObject({
    useername:"sam",
    prices:899
})

//  find array 
const myNewArray =[200,440,500,620]

function retrunSceondvalue(getArray){
    return getArray[1]
}
console.log(retrunSceondvalue(myNewArray));

        