

// const coding =['js','ruby','java','py']

// const values =coding.forEach((item)=>{
//     // console.log(item);
//     return item
// })
// console.log(values);


const myNums =[1,2,3,4,5,6,7,8,9]
myNums.filter((num)=>{
    let a=num>4
    console.log(a);
})

const newnumb= myNums.filter((num)=>num>4)
console.log(newnumb);

const newnumbs= myNums.filter((num)=>{
   return num>4
    }
)
console.log(newnumbs);

myNums.forEach((num)=>{
    if(num>4){
        newnumbs.push(num)
    }
})
console.log(newnumb);