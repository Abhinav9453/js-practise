let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); //gives the time in milisecond of present
// console.log(myCreatedDate.getTime()); //gives the time of present moment
// console.log(Math.floor(Date.now()/1000)); // for converting the time in second to absolute value

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // so the end user dont get confused about the date as in js date start from 0
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})