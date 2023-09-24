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


//map method
//Calls a defined callback function on each element of an array, and returns an array that contains the results. 

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newnumb = myNumbers.map( (num) => (num +10))

const newnumb = myNumbers
                .map ( (num) => num*10 )
                .map( (num) => num+1 )
                .filter( (num) => num>=40 )

console.log(newnumb);


// Reduce method
//Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

const meraNumber = [1, 2, 3, 4]

// const myTotal = meraNumber.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = meraNumber.reduce( (acc, currval) => acc+currval,0 )

console.log (myTotal)



const shoppingCart = [
    {
        item: 'Js Course',
        price: 2599
    },
    {
        item: 'designing Course',
        price: 4599
    },
    {
        item: 'Mob Dev Course',
        price: 8599
    },
    {
        item: 'Machine learning Course',
        price: 12599
    },
    {
        item: 'Data Science Course',
        price: 16599
    },
]

const cartPrice = shoppingCart.reduce( (acc, item) => (acc + item.price),0 )
console.log(cartPrice);