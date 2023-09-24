const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter ( (num) => num > 4)
// console.log(newNums); //filter returns the value


// const newNums = myNums.filter ( (num) => {
//     return num > 4
// } )

// console.log(newNums); // for passing the argument inside the object we have to return the value


//forEach Performs the specified action for each element in an array.
const newNums = [] 
myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
} )

console.log(newNums);