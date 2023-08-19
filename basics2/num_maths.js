const  score = 400
console.log(score); //here in output it will display the value bcz it automatically takes it as number


const balance = new Number(100) //here the new keyword is used and it is object in javascript and put the type as Number
console.log(balance); // her in the output cast that it is number

// toString function makes the number converted into string type 
console.log(balance.toString().length); // Returns a string representation of an object.
// Specifies a radix for converting numeric values to strings. This value is only used for numbers.

// toFixed is used for the precision palce after decimal value
console.log(balance.toFixed()); //Returns a string representing a number in fixed-point notation.
// Returns a string representing a number in fixed-point notation.


const otherNumber=25.3654
console.log(otherNumber.toPrecision(3)) //Number of significant digits. Must be in the range 1 - 21, inclusive. 
//Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.