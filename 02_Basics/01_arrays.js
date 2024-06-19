//  array
const myarr=[1,2,3,4,5,6]
console.log(myarr);
console.log(myarr[0]);

const myarr2 =new Array(1,3,2,5,2,3,5,1)
console.log(myarr2);
console.log(myarr2.length);

//  Array Methods
// const myarr=[1,2,3,4,5,6]
console.log(myarr);
myarr.push(6);   // push 6 value at end
console.log(myarr);

myarr.pop(6);   // pop 6 value 
console.log(myarr);

myarr.unshift(6);   // at starting point add value 6
console.log(myarr);

myarr.shift();   // at starting point remove value 6
console.log(myarr);


console.log(myarr.includes(1));
console.log(myarr.indexOf(1));
console.log(myarr.indexOf(19));

const newArr = myarr.join()
console.log(myarr);
console.log(newArr);

//  slice, splice

console.log("A",myarr);

const myn1 =myarr.slice(1,3)
console.log(myn1);

console.log("B",myarr);
const myn2 =myarr.splice(1,3)

console.log("C",myarr);
console.log(myn2);
