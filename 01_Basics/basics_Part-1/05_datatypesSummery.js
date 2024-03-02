 // two types of datatypes 
// a. prempitive (used stack memory- crates copy of the value)
// b. non-premptive (used heap memory- makes the refrence of the value)

//************** Premptive *****************
// 7 types: String, Number, Boolean, null, undefined, symbol (makes any value unique), BigInt

const score = 100 //number
const scorevalue = 100.3 //number

const isloggedin = false //boolean
const outsidetemp = null //object
let userEmail; //string

const id = Symbol('123') //symbol
const anotherid = Symbol('123')
console.log(id==anotherid)
//whether the value of the both variables are same but the rusult having different value and this is the work of the symbol


const bignumber = 1245325244545n //example of BigInt

//************Non-Premptive (Reference type) ***************/
//Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"] //example of array

let myObj={
    name: "Ravi",
    age: 21,
} // example of object

const myfunction = function(){
    console.log ("Helllo Ravi");
}// example of function

console.log(typeof heros)

// *******************Stack and Heap Memory***********************
// stack (premptive) , Heap (non-premptive)

let myyoutubename = "r4ravikumardotcom"

let anothername = myyoutubename
anothername = "codegard"

console.log(myyoutubename)
console.log(anothername)

let userone = {
    email: "username@google.com",
    upiid: "user@upi",
}

let usertwo=userone

usertwo.email = "r4ravikumar@codegard.in"

console.log(userone)
console.log(usertwo)