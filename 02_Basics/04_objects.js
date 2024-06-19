// singletone object
// const tinderUser = new Object()

// non single tone object
const tinderUser = {}

tinderUser.id = "123ABV"
tinderUser.name = "dhruv"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "dhruv@1gmail.com",
    fullname: {
        userfullname: {
            firstname: "DHruv",
            lastname: "maisuria"
        }
    }
}
console.log(regularUser);

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname?.userfullname.firstname);


const obj1 ={
    1:"a",2:"b"
}
const obj2 ={
    3:"a",4:"b"
}
const obj5 ={
    5:"a",6:"b"
}

const obj3 = {obj1,obj2 }
console.log(obj3);
const obj4 = Object.assign(obj1,obj2,obj5)
const obj4a = Object.assign({},obj1,obj2,obj5)
console.log(obj4,obj4a);


const obj3a ={...obj1, ...obj2,...obj5}
console.log(obj3a);


const user =[
    {
        email:"fnesj"
    },{email:"fnesj"},{},{}
]

user[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course = {
    coursename:"jsa",
    price:1000,
    courseInstructor:"Dhruv"
}
// course.courseInstructor
const {courseInstructor}= course
console.log(courseInstructor);

const {courseInstructor: instructor}= course
console.log(instructor);

// {
//     name:"dhruv",
//     coursename:"jsa",
//     price:"free",
// }

// array 
[
    {},
    {},
    {}
]