
// Object.create

// object literals
const mySum = Symbol("Key1")

const JsUser = {
    name: "Dhruv",
    "fullname":"DHruv Maisuria",
    age: 21, 
    [mySum]:"mykey1",
    location: "navasari",
    email:"dhruv123@gmail.com",
    isLoggedIn:false,
    lastLoginDays:['Monday','sunday']

}

console.log(JsUser.age); 
console.log(JsUser["age"]); 
console.log(JsUser["fullname"]);
console.log(typeof (JsUser[mySum]));
console.log(JsUser[mySum]);

JsUser.email ="Dhruvmaisuriya123@gmail.com"
// Object.freeze(JsUser)
JsUser.email ="Dhruvmaisuira123@gmail.com"

console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(JsUser.greeting())


JsUser.greeting = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting())