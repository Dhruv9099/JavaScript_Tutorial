const user = {
    username: "DHruv",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to our website.`)
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username ="D"
// user.welcomeMessage()

// console.log(this);

function chai() {
    console.log(this);
}
chai()

function chaai() {
    let username = "DHRUV"
    console.log(this.username);
}
chaai()

const chaiwala = function () {
    let username = "DHRUV MAISURIA"
    console.log(this.username);
}
chaiwala()


//  arrow function 
const coffee = () => {
    let username = "DHRUV"
    console.log(this);
}
coffee()



// 
const addTWOs = (num1, num2) => {
    return num1 + num2
}
console.log(addTWOs(2, 6));

// implicit return

const MinTWO = (num1, num2) => { return num1 - num2 }
console.log(MinTWO(2, 6));

//  without curly bracics 
const minus = (num1,num2)=> (num1-num2)
console.log(minus(5,22));

// 
const names=(num1,num2)=> ({username:" DDHRUV"})
console.log(names());


// // 
// const myArray =[2,6,5,5,6,8,2]

// myArray.forEach()
