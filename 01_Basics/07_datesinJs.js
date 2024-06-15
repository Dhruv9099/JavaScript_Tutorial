// let myDate =new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

let myCreatedDate = new Date("2024-04-14");
console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getFullYear());

// `${newDate.getDay()} and the time`

date= newDate.toLocaleString('default',{
    dayPeriod:"long",
    weekday: "long",
    month:"long"
})
console.log(date);
