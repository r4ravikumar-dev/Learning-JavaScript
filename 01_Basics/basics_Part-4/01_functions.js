function sayMyName(){
    console.log("Ravi Kumar");
}
// sayMyName //function reference
// sayMyName() //function execution

function addTwoNumbers(number1,number2){
    let addition = number1+number2
    console.log(addition);
    return addition // here the value of additiion is returned in the function and then when we call the function then execute it the value of addition is returned.
}
const addition = addTwoNumbers(3,4) 
console.log("Result:", addition);

//the addition decelared inside the function is different than the result decelared outside the function.


function loginUserMessage (username){
    if (username===undefined){
        console.log("Please enter a username");
        return
    } // in this line if the person doesn't give any value then it will execute the if statement and put the message

    // if (!username){
    //     console.log("Please enter a username");
    //     return
    // } //another way to implememt if staement
    return`${username} just logged in`
}

// loginUserMessage("Ravi")
// console.log(loginUserMessage("Ravi"));
console.log(loginUserMessage()); 


//Functions with objects and array

function calculateCartPrice(...num1){
    return num1
} //if we declare only 1 parameter but in some situation we want more than one aergument then we use rest operator, it symbol is same as spread operator but its work is to pack all the argument in one and return it in a single parameter and it will give it in array

console.log(calculateCartPrice(800,900,500));


//passing object in the function
const user = {
    username: "Ravi",
    price: 299
}

function handelObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handelObject(user)
handelObject({
    username: "Satyam",
    price: 499
}) // we can pass oject too in the parameter


//passing array in function

const myNewArray = [500,300,800,200]

function returnSceondValue(getArray){
    return getArray[3]
}

console.log(returnSceondValue(myNewArray)); // here we are passing array as ann argument
console.log(returnSceondValue([200,300,400,500])); // here we are passing array as a variable