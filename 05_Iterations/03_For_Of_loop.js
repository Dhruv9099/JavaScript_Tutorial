const arr =[1,2,3,4,5]
for (const num of arr){
    console.log(num);
    
}


const greetings ="hello world"
for (const greet of greetings){
    console.log(`Each char is ${greet}`);
}


// Maps

const map =new Map()
map.set('IND',"India")
map.set('USA',"United State of America")
map.set('AUS',"Austrila")
map.set('AUS',"Austrila")
console.log(map);


for (const key of map){
    console.log(key);
}

for (const [key,value] of map){
    console.log(key," :- ",value);
}


// for (const [key,value] of myobject){
    // TypeError: myobject is not iterable
// 

// const myobject = {
//     'game1':"GTA",
//     'game2':"RDR"
// }


// for (const [key,value] of myobject){
//     console.log(key," :- ",value);
// }