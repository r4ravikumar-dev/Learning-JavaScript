let a = 10
const b = 20
var c = 30 // this is termed as global scope and the value we declare here are usable by anywhere


{} // known as scope


if (true){
    let a = 10
    const b = 20
    var c = 50 
    console.log("Inner:", a,b,c);
} //this is called as block scope and the value we decleare is limited only to this block

console.log(a);
console.log(b);
console.log(c); // in this line the output is the latest value of var what we assigned to it

// whether we use var as global or block scope it is usebalbe at anywhere
