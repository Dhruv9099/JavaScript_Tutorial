// for
// for Initialization (let i = 0;) Condition (i < 10;) Increment (i++) Loop Body:

// Start of the for loop
for (let i = 0; i <= 10; i++) {
    // Body of the loop
    const element = i;  // Define a constant 'element' which stores the current value of 'i'
    console.log(element);   // Output the current value of 'element' to the console
}
// End of the for loop

// ex 2
for (let x = 0; x <= 10; x++) {
    const elements = x;
    if (elements == 5) {
        console.log("5 is best number");
    }
    console.log(elements);
} 

// ex 3

for (let i = 0; i < 10; i++) {
    console.log(`outer loop i ${i}`);
    for(let j=0;j<10;j++){
        console.log(`inner loop i: ${j} and outer: ${i}`);
    }
}

//  ex 4
for (let i = 1; i < 11; i++) {
    console.log(" ");
    console.log(`table of ${i}`);
    for(let j=1;j<11;j++){
    // console.log(i + ' * ' + j  + " = " + i * j)
    console.log(`${i} * ${j} = ${i*j}`);
;    }
}


// ex 5

let myArray =["ironman","Thor","Batman","Loki","Wanda","black window"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}


// ex 6


//`````````````` break and continue``````````````

//  ex 1 for break
for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log(`Detected : ${index}`);
        break
    }
    console.log(`value of index : ${index}`);
    
}

//  ex1 for continue
for (let index = 100; index <= 110; index++) {
    if (index == 105){
        console.log(`Detected : ${index}`);
        continue
    }
    console.log(`value of index : ${index}`);
    
}

