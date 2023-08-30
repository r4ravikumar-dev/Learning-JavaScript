const coding = ["js", "cpp", "java", "py", "ruby"]

coding.forEach( function (item) {
    console.log(item);
} ) //A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
// Performs the specified action for each element in an array.


coding.forEach( (item) => {
    console.log(item);
} ) // through arrow function


function printMe (item) {
    console.log(item);
}

coding.forEach(printMe) //through passing the parameter from another function


coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
} )


const myCoding = [
    {
        languageName : "Javascript",
        languageFileName : "js"
    },
    {
        languageName : "C++",
        languageFileName : "cpp"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(`${item.languageName} file name is ${item.languageFileName}`);
}) // accessing the objects of the array through callback
