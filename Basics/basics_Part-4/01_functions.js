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