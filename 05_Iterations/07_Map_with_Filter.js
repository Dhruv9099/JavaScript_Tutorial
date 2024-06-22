const MyNumbers =[1,2,3,4,5,6,7,8,9,10]

const NewNumbers =MyNumbers.map((num)=>{
    return num +10
})
console.log(NewNumbers);

MyNumbers.forEach((item)=>{
    console.log(item);
})

const NewNUMd= MyNumbers
                        .map((num)=>num *10)
                        .map((num)=> num +1)
                        .filter((num)=> num>=40)

console.log(NewNUMd);