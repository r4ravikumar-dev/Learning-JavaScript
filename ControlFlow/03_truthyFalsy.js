const userEmail = "ravi@codegard.in"

if (userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}
//here in the case of string empty string is termed as false and something in the string written is termed as true
//hefe in the case of aray empty string is termed as true 

//falsy values
//false, 0, -0, BigInt, 0n, "", null, undefined, NaN

//truthy value
//"0", 'false', " ", [], {}, function(){}

const emptyobj = {}

if (Object.keys(emptyobj).length === 0){
    console.log("Empty Object");
}


// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ??10 ?? 15 // it will print the first assigned value

console.log(val1);


//Terniary Operator
// condition ? true : false //syntax for terniary operator

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("grater than 80");