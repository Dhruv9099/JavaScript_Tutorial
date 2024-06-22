

const myNums =[1,2,3];

const mytotal= myNums.reduce(function(acc,currval){
    console.log(`acc: ${acc} and current value: ${currval} = ${acc}+${currval}`);
    return acc + currval
},0)
console.log(mytotal);

console.log(" ");

const mynymber=[1,2,3];
const myTotoals= mynymber.reduce((acc,currval)=>acc+currval,0)
console.log(myTotoals);


const shoppingCart =[
    {
        itemName:"Js course",
        price:2999
    },
    {
        itemName:"Python course",
        price:5449
    },
    {
        itemName:"Data Scince course",
        price:8999
    },
    {
        itemName:"ECOM course",
        price:5399
    },
]

console.log(shoppingCart);
const pricetopay =shoppingCart.reduce((acc,item)=>acc + item.price,0)
console.log(pricetopay);