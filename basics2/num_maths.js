//**********************************Numbers*************************************/

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
console.log(otherNumber.toPrecision(3)); //Number of significant digits. Must be in the range 1 - 21, inclusive. 
//Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.


// A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
const hundreds = 100000
console.log(hundreds.toLocaleString('en-In')); // Converts a number to a string by using the current or specified locale.


//***************************************** Maths*******************************/
console.log(Math); // Maths is an object and it have different methods and parameters

console.log(Math.abs(-4)); // abs is used for absolute value and converts and value into its absolute value
// Returns the absolute value of a number (the value without regard to whether it is positive or negative). For example, the absolute value of -5 is the same as the absolute value of 5.

console.log(Math.round(4.3)); // round is used for rounding off the value
//Returns a supplied numeric expression rounded to the nearest integer.

console.log(Math.ceil(4.3)); //Returns the smallest integer greater than or equal to its numeric argument.
console.log(Math.floor(4.9)); // Returns the greatest integer greater than or equal to its numeric argument.

console.log(Math.min(4,8,9,5)); // Returns the smaller of a set of supplied numeric expressions.

console.log(Math.max(4,8,9,5)); // Returns the larger of a set of supplied numeric expressions.


console.log(Math.random()); // Returns a pseudorandom number between 0 and 1.

console.log((Math.random()*10)+1); // on multiplying with 10 it will give valur between 1 to 9

console.log(Math.floor(Math.random()*10)+1); //on adding 1 it will always give value greater than 1

const min=10
const max=20

console.log(Math.random ()*(max-min+1)+min) // in this case we will have value lies between min to max value and always having atleast min value