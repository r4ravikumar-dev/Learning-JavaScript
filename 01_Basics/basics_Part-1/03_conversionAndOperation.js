let score = "33"

console.log(typeof score); 
console.log(typeof(score));

let valueInNumber = Number(score) //the value is being converted to a number from string value
console.log(typeof valueInNumber)

// "33" => 33
// "33abc" => NaN aka not a number and the typer of NaN is number
//"Null" => 0
//"undefined" => NaN
// true => 1; false => 0;

// Boolean conversion
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean (isLoggedIn)
console.log (booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "ravi" => true

let somenumber = 33
let stringnumber = String (somenumber) // chasanged the value from number to string
console.log(stringnumber);
console.log (typeof stringnumber);

// ******************** Operations *****************

let value =3
let negvalue =  -value
console.log(negvalue);

let str1 = "hello"
let str2 = " ravi"
str3=str1+str2;
console.log(str3);

console.log("1" + 2); // output: 12
console.log("2" + 2 + 2); // output:222
console.log(2+2+"1"); // output:41
// in type conversion of datatypes in Javascript if string comes first then the numbers are being converted into string and then string operration takes place and if the numbers comes first then the operation takes place and then string operation takes place

// some tricky conversion

console.log(true);
console.log(+true); // gives  1 as output

let gamecounter =100
gamecounter++; //postfix operation
console.log(gamecounter);

let gamecounter11 =100
++gamecounter11; //prefix operation
console.log(gamecounter11);