// Control Flow or Logic Flow
// control flow or logic flow makes sure that at the time instance not complete code runs but some part of the code must run which is necessary 


//if
const isUserLoggedIn = false
if(isUserLoggedIn){
    console.log("Executed");
} // if the condition is true then the code will execute other wise it will not

//conditions are 
//<, >, <=, >=, ==, !=, === (checks the type also), !==

else{
    console.log("Not-Ececuted");
}

// short-hand notation

const balance = 1000
// if (balance>500) console.log("test"), console.log("test2"); //implicit scope here code is written in single line and if want to write code in multiple line then we use comma to seperate

if (balance < 500) {
    console.log("less than 500");
}
else if (balance < 750)
{
    console.log("less than 750");
}
else {
    console.log("less than 1200");
}


// multiple condition 

const userLoggedIn = true
const debitCard = true
const userLoggedInFromGoogle = true
const userLoggedInFromEmail = true

if (userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if (userLoggedInFromGoogle || userLoggedInFromEmail) {
    console.log("user is logged in");
}
