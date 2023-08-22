// const user = {
//     username: "Ravi Kumar",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username} , Welcome to website`);
//         console.log(this);// this keyword makes the current context and used to access all the variables fron the current scope

//     } 
    

// }

// user.welcomeMessage()

// user.username = "Satyam" //here we changed the context so the output will be different
// user.welcomeMessage()

// console.log(this); // in node environment if we use this keyword then it will output as the empty object but in the browser if we use this keyword then it will output as window object bcz in brower the global object is window objected 


// function just(){
//     let ussrname = "Ravi"
//     console.log(this.username);
// } // here the output is undefined because the this keyword can be used under the object only not in the function
// just() 


// Deceleration of Arrow Functions

// const just = function (){
//     let ussrname = "Ravi"
//     console.log(this.username);
// }
// just()


// const just = () => {
//     let ussrname = "Ravi"
//     console.log(this); //here also this function provides us the empty object as output 
// }
// //ceceleration of arrow function 
// just()


// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// // addTwo(3,5) 
// console.log(addTwo(3,5));


// const addTwo = (num1 , num2) => num1 + num2 

// const addTwo = (num1 , num2) => (num1 + num2) // when we use parentheses () then we don't have to use return keyword

// example of implicit return, in this the functionn arguments are written in a single line

const addTwo = (num1 , num2) => ({username: "Ravi"}) // for object deceleration we have to use the curly bracket

console.log(addTwo(3,5));