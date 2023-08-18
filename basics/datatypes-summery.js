// two types of datatypes 
// a. prempitive
// b. non-premptive 

//************** Premptive *****************
// 7 types: String, Number, Boolean, null, undefined, symbol (makes any value unique), BigInt

const score = 100 //number
const scorevalue = 100.3 //number

const isloggedin = false //boolean
const outsidetemp = null //object
let userEmail; //string

const id = symbol('123') //symbol
const anotherid = string('123')
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