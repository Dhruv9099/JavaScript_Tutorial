const marvel_heros = ["thor ","Ironman","Spiderman"]
const dc_heros=["superman","flash","batman"]

// // push
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3],[1]);

// //concat
const all_heros =marvel_heros.concat(dc_heros)
console.log(all_heros);

// spread operator
const all_new_heros =[...marvel_heros,...dc_heros]
console.log(all_new_heros);

// flat()
const  another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// 
console.log(Array.isArray("Dhruv"))
console.log(Array.from("Dhruv"))
console.log(Array.from("1231234567"))
console.log(Array.from({name:"Dhruv"})) // interesting

let score1 =100;
let score2 =200;
let score3 =300;
console.log(Array.of(score1,score2,score3));