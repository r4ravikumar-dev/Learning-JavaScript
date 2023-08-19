const marvel_heros = ["Thor" , "Ironman" , "Spiderman"]
const dc_heros = ["Batman" , "Flash" , "Superman"]

marvel_heros.push(dc_heros) //Appends new elements to the end of an array, and returns the new length of the array.
// it takes another array as an elements and append it into the end of the array


console.log(marvel_heros); // output: [ 'Thor', 'Ironman', 'Spiderman', [ 'Batman', 'Flash', 'Superman' ] ] 
console.log(marvel_heros[3]); //output: [ 'Batman', 'Flash', 'Superman' ]
console.log(marvel_heros[3][1]); // output: Flash


const allheros = marvel_heros.concat(dc_heros) //Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log(allheros); //output: [ 'Thor', 'Ironman', 'Spiderman', 'Batman', 'Flash', 'Superman' ]


//spread operator technique for array concadination this works same as concat function
const allheros1 = [...marvel_heros, ...dc_heros] 
console.log(allheros1); //output: [ 'Thor', 'Ironman', 'Spiderman', 'Batman', 'Flash', 'Superman' ]


const anotherArray = [1,2,3,[4,5,6],7,[7,8,[8,9]]]
const realAnotherArray = anotherArray.flat(Infinity) //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(realAnotherArray); //output: [ 1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 9 ]


console.log(Array.isArray("Ravi")); // checks whether it is Array or not and gives output as boolean value
console.log(Array.from("Ravi")); //Creates an array from an iterable object.
console.log(Array.from({name: "ravi"})); // output gives as empty array (****Interesting****)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //Returns a new array from a set of elements.