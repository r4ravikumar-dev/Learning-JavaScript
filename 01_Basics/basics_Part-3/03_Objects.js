// Objects are declared in two ways 
// a. literal (Not Singleton)
//b. constructor (Singleton)
// Object.create() //Creates an object that has the specified prototype or that has null prototype.

//Object Literals

const mySym = Symbol ("key1")

const JsUser = {
    name: "Ravi",
    "FullName": "Ravi Kumar",
    [mySym]: "myKey1", //for decelaration of symbol under objects
    age: 23,
    location: "Srinagar",
    email: "ravi@codegard.in",
    isLoggedIn: false,
    lastLoginDate: ["monday", "Sunday"]
}

//decelaration of Objects in different types
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["FullName"]);

//always use . for object deceleration

console.log(JsUser[mySym]); //syntax for printing the symbol

JsUser.email = "ravi@medu.com"

// Object.freeze(JsUser) //Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
console.log(JsUser);

//Adding functions in JavaScript
JsUser.greeting = function(){
    console.log("Hello Js User")
}

console.log(JsUser.greeting); //output: undefined and function returnback

console.log(JsUser.greeting()); // execution of function

//referencing the same object
JsUser.greetingtwo = function(){
    console.log(`Hello Js User, ${this.name}`) // this is used for reference of the same object
}

console.log(JsUser.greetingtwo()); 



// ******************* object Singleton  or deceleration using constructor***************

const tinderuser = new Object() //singleton object
//const tinderuser = {} //non sigleton
 
tinderuser.id = "123abc"
tinderuser.name = "sammy"
tinderuser.isloggedin = false
console.log(tinderuser);

//deceleration of objects under objects

const regularuser = {
    email: "sum@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ravi",
            lastname: "Kumar"
        }
    }
}
console.log(regularuser.fullname.userfullname.firstname);

// combaining objects 
 
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {obj1, obj2} // this will give objects and object as output
console.log(obj3);

const obj4 = Object.assign({},obj1, obj2) //Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
console.log(obj4);

const obj5 = {...obj1, ...obj2} //using spread operator
console.log(obj5);


// when data come from database then it will come from array of objects

const user = [{
        id : 1,
        email: "r@gmail.com",
    },
    {
        id : 2,
        email: "a@gmail.com",
    },
    {
        id : 3,
        email: "v@gmail.com",
    },
]
user[1].email

console.log(tinderuser);

console.log(Object.keys(tinderuser)); //Returns the names of the enumerable string properties and methods of an object (returns all keys as an Array)

console.log(Object.values(tinderuser)); //eturns an array of values of the enumerable properties of an object

console.log(Object.entries(tinderuser)); //Returns an array of key/values of the enumerable properties of an object

console.log(tinderuser.hasOwnProperty('isloggedin')); //Determines whether an object has a property with the specified name. (returns output as boolean)


//Destructuring of Object

const course ={
    coursename: "Learning JavaScript",
    price: "999",
    courseInstructor: "Hitesh Choudhary"
}

//course.courseInstructor //Basic syntax for accessing the object

const {courseInstructor} = course //another syntax for accessing the objects
console.log(courseInstructor);

const {courseInstructor: instructor } = course //in this syntax we can change the name of object according to our convenience, it termed as destructruing of object
console.log(instructor);
