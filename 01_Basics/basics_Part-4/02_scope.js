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


//Nested Scope
function one(){
    const username = "ravi kuamr"
    console.log(username);

    function two(){
        const website = "YouTube"
        console.log(username);
    }
    console.log(website); // this scope can't be accessed because it's scope is inside the two function only
    // the function inside the function can access the items from its parent function and this concept is called as closure property 

    two()
}

one()

if (true) {
    const username = "Ravi"
    if (username==="Ravi") {
        const website = " CodeGard.in"
        console.log(username+website);
    }

    console.log(username);
}

// +++++++++++++++++++++++ Interesting +++++++++++++//

//different techniques for deceleration of function

function addone (num){
    return num+1
}
addone (5)

//other type of deceleration

const addTwo = function (num){
    return num+2
}
addTwo(5)