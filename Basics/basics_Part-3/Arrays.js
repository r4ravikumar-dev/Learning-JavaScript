// Arrays in JavaScript
// Array in Javascript is an object type


const myArr = [0,1,2,2.5,3,4]
console.log(myArr);
console.log(myArr[0]); // output with the index number


//different types of decelartaion of an Array
const myArr2 = new Array(18,19,20) // in this example we declare an array with the help of new object and here we dont use square bracket []


//Array methods

myArr.push(6) //push function Appends new elements to the end of an array, and returns the new length of the array.
console.log(myArr); // output: 0,1,2,2.5,3,4,6

myArr.pop() // pop function Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(myArr); //output: 0,1,2,2.5,3,4

myArr.unshift(0) //Elements to insert at the start of the array. Inserts new elements at the start of an array, and returns the new length of the array.
console.log(myArr); //output: 0,0,1,2,2.5,3,4

myArr.shift() //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(myArr); //output: 0,1,2,2.5,3,4

console.log(myArr.includes(3)); //output: true
//Determines whether an array includes a certain element, returning true or false as appropriate.

console.log(myArr.indexOf(3)); //output: 2.5
//Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

const newArr =myArr.join() //Adds all the elements of an array into a string, separated by the specified separator string.
console.log(newArr); // output will be string

//Slice or splice method in Array
console.log("a", myArr);

const myArr1 = myArr.slice (1,3) // Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array. in this start to end elemet is selected but end element is not included
console.log("b", myArr);
console.log(myArr1);

const myArr3 = myArr.splice (1,3) //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements. in splice method the array is being mauplated and the elements fron the index number is being deleted
console.log("c", myArr);
console.log(myArr3);