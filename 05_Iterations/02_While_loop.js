// ``````````````while``````````````

// while (condition) {

// }


// ex 1
let index =0
while (index <= 10) {
    console.log(`value of index: ${index}`);
    index = index +2
}


// ex 2
let myArray =["ironman","Thor","Batman","Loki","Wanda","black window"]
let arr =0
while (arr<myArray.length) {
    console.log(`value of ${myArray}`);
    arr =++arr // arr= arr + 1
    
}


// do while loop

let score = 1
do{
    console.log(`score is ${score}`);
    score++
}while(score<=10);

// ex 2
let scores = 102
do{
    console.log(`score is ${scores}`);
    scores++
}while(scores<=10);
