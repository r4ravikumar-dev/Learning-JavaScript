// string can be denoted as in single quote ('') or doble quote ("")

const username="Ravi "
const repocount = 50

console.log (username + repocount) // old fashion to use string functions like concaditanitation


//use backtics(``) whics uses string interpolation in this we make placeholder for datatypes
console.log (`hello my name is ${username} and my repo count is ${repocount}`);


//different way to decelaration of string
const gameName= new String("Ravi Kumar") //uses new keyword which uses the objects of javascript

console.log(gameName)

console.log(gameName[0]) //access key value pair

console.log(gameName.__proto__) //access prototypes of string


console.log(gameName.length) //acess the length of string

console.log(gameName.toUpperCase()); //converts the string elements into uppercase element 

console.log(gameName.charAt(5)); // for finding the character at the specified possition we pass the index value and it shows the character at   that position

console.log(gameName.indexOf('u')); //find out the index of the character and we pass the character and then it shows us the position of the character

//deviding the string into substrings
const gameName2= new String("Ravi-Kumar")
const newString= gameName2.substring(0,6)
console.log(newString);

//slice method
const anotherString = gameName2.slice(-8,6) // if we give negative value the it will print fromm reverse
console.log(anotherString)

//trim and replace method
const newStringOne="        Ravi        "
console.log (newStringOne);
console.log (newStringOne.trim()); // trim replaces the space which is in starting and end in the string

const url= "https://codegard.in/blog%20year2023"
console.log (url.replace('%20','-')) //replace the value with the specified value

console.log(url.includes('codegard')) // includes is used to search whetwther the keyword is in the string or not

console.log(gameName2.split('-')) // split the string into arrays on the basics of the given argument or operator