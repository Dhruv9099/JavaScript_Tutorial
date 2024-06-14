let score = "33"; // string
console.log(typeof score);

let valueinNumber = Number(score); // conversion 
console.log(typeof valueinNumber);

//   "33 => 33 "
// "33abc => NaN"
// 
// true=> 1 ;  false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log("BooleanIsLoggedIn " + booleanIsLoggedIn);

let isLoggedout = 0
let booleanIsLoggedout = Boolean(isLoggedout)
console.log("BooleanIsLoggedout " + booleanIsLoggedout);

// 0,"" => false
// 1,"dhruv"=> true  


let somenumber = 9099
let stringmaker = String(somenumber);
console.log(typeof stringmaker)
console.log(stringmaker);





//  ************************************* Operations ***************************************************************

// let value = 3
// let negValue = -value
// console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);
// console.log(2**2);

let str1 ="Dhruv"
let str2 =" Maisuria"
let str3 =str1 + str2
console.log(str3);


console.log(1+"2");
console.log("2"+ 1);
console.log("1"+2+3);


console.log(1+2+"3");
console.log(3*5+5-8/5); //not write like this

console.log([(3*5)+1-(4/2)]);

// 
console.log(+true);

// 
let num1,num2,num3 
num1=num2=num3 = 2+4
console.log(num1)

// incremental assignment prefix and postfix

let x =3
let y = x++;
console.log(`x:${x} , y:${y}`);

let a =3
let b = ++a;
console.log(`a:${a} , b:${b}`);