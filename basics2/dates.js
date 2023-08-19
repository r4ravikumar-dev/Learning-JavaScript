// dates

let myDate = new Date()
console.log(myDate);
console.log(typeof myDate) // Date is an object in JavaScript
console.log(myDate.toString()); // output: Sat Aug 19 2023 08:09:18 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // output: Sat Aug 19 2023
console.log(myDate.toLocaleString()); // output: 8/19/2023, 8:09:18 AM
console.log(myDate.toISOString()); // output: 2023-08-19T08:09:18.409Z
console.log(myDate.toLocaleDateString()); // output: 8/19/2023
console.log(myDate.toUTCString()); // output: Sat, 19 Aug 2023 08:09:18 GMT


let myCreatedDate = new Date(2023, 8 ,19)
console.log(myCreatedDate.toDateString()); //Tue Sep 19 2023
//in javascript months starts with 0 to 11

let myCreatedDate2 = new Date(2023, 8 ,19 , 5, 30) // syntax: Date(year: number, monthIndex: number, date?: number | undefined, hours?: number | undefined, minutes?: number | undefined, seconds?: number | undefined, ms?: number | undefined)
console.log(myCreatedDate2.toLocaleString()); // 9/19/2023, 5:30:00 AM

let myCreatedDate3 = new Date("2023-01-27") //if we write date in singlr digit then it will  satrt from 0 and will end to 11 and id we write in dd-mm-yyyy then it will start from 01 to 12
console.log(myCreatedDate3.toLocaleString()); //output: 1/27/2023, 12:00:00 AM


//time stamps

let myTimeStamp = Date.now()
console.log(myTimeStamp); // it will give the time stamp output will be in millisceond value
console.log(myCreatedDate.getTime()); //it will give the time stamp in millisceound till the specified date we enter
console.log(Date.now()/1000); // it will converts the millisceond in sceond but provides the decimal value
console.log (Math.floor(Date.now()/1000)); //remove decimal value


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay()); // Gets the day of the week, using local time.
console.log(newDate.getHours()); //Gets the day of the week, using local time

newDate.toLocaleString('default',{
    weekday: "long",
    // timeZone: 'en-In',
})

