const score = 900;
console.log(typeof score);
console.log(score);
const balance = new Number (100);
console.log(typeof balance);

console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const othernumber =123323.8966
console.log(othernumber.toPrecision(3));

const hundereds =100000;
console.log(hundereds.toLocaleString('en-IN'));


// ++++++++++++++++++++ MATHS ++++++++++++++++++++++++++



console.log(Math);
console.log(Math.abs(4));
console.log(Math.round(4.36));
console.log(Math.ceil(4.36));
console.log(Math.floor(4.36));
console.log(Math.cos(0));
console.log(Math.min(4.36,5 ,2));
console.log(Math.max(4.36,5 ,1 ,2));

console.log(Math.random());
console.log(Math.random()*10);

const min = 42;
const max =60;
Math.random()*(max-min+1) 
