// for in loop

const myobject ={
    js:'Javascript',
    cpp:'c++',
    py:'python',
    rb:"ruby"
}

for (const key in myobject){
    console.log(key);
}
for (const key in myobject){
    console.log(myobject[key]);
}
for (const key in myobject){
    console.log(`${key} shortcut is for ${myobject[key]}`);
}


const programming =["rb","js","py","html"]
for (const key in programming){
    console.log(key);
}
for (const key in programming){
    console.log(programming[key]);
}


// map iterbation in for in loop
//  it cannot done beacue map is not iternable with for in loop

const map =new Map()
map.set('IND',"India")
map.set('USA',"United State of America")
map.set('AUS',"Austrila")
map.set('AUS',"Austrila")
// console.log(map);

for (const key in map){
    console.log(key);
}