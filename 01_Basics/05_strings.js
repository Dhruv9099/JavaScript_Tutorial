const name ="Dhruv"
const number = 9099

console.log(name+ number + "value");
console.log(`hello my name is ${name} and my number is ${number}`);

const gamename =new String('Dhruv Maisuria From Vansda');
console.log(gamename); 


console.log(gamename[1]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.charAt(2));
console.log(gamename.toUpperCase());
console.log(gamename.indexOf('d'));


const newString = gamename.substring(0,2)
console.log(newString);

const anotherString = gamename.slice(0,4)
console.log(anotherString);

const anotherStrings= gamename.slice(2,4)
console.log(anotherStrings);

const newstringOne= "   DHRUV   "
console.log(newstringOne);
console.log(newstringOne.trim());

const url ="https://dhruv.com/in/dhruv%20Maisuria";

console.log(url.replace('%20','-'));
console.log(url.includes('h'));


console.log(gamename.split('-'));
