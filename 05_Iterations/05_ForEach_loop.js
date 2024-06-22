// forEach loop
const coding =['js','ruby','java','py']

// coding.forEach( function name(){} )

// // 1
// coding.forEach( function (item){
//     console.log(item);
// } )


// // 2
// coding.forEach((item)=>{
//     console.log(item);
// } )


// // 3
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)


coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

const mycoding =[
    {
        languageName:"javascript",
        languageFileName: "js"
    } ,
    {
        languageName:"python",
        languageFileName: "py"
    } ,
    {
        languageName:"ruby",
        languageFileName: "rb"
    } ,
    {
        languageName:"hypertextmarkup",
        languageFileName: "html"
    }
]
mycoding.forEach((item)=>{

    console.log(item.languageFileName,item.languageName);
})