// for of loop //

const arr = [1,2,3,4,5]
for (const value of arr) {
    console.log(value);
}


const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each character is ${greet}`);
}


// Maps :no duplicate value always gives unique value and it is same as array

const map = new Map
map.set('IN', "India")
map.set('USA', "united States of America")
map.set('UK', "United Kingdom")
map.set('FR', "France")
map.set('IN', "India")

console.log(map);   //     output: Map(4) {
                    //      'IN' => 'India',
                    //     'USA' => 'united States of America',
                    //     'UK' => 'United Kingdom',
                    //     'FR' => 'France'
                    //   } 
                    //  here in the output we are seeing that it only stores unique values not duplicate values

for (const [key, value] of map) // here [] is destructuring of an array
{
    console.log(key,':-', value);
}


const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key, value] of myObject) 
// {
//     console.log(key,':-', value);
// }
//objects are not iteratable with forof loops