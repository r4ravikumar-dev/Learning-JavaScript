//for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// } //Syntax of for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    
    if (element == 5){
        console.log("5 is the best number");
    }
    console.log(element);
}

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(`inner loop ${j} and outer loop ${i}`);
        
    }

    
} //loops under loop is termed as nested loop


let myArry = ["flash", "spiderman", "batman", "superman"]
for (let index = 0; index < myArry.length; index++) {
    const element = myArry[index];
    console.log(element);
}


//break and continue

// for (let index = 0; index <= 20; index++) {
//     if (index == 5){
//         console.log("detected 5");
//         break
//     }
//     console.log(`value of i is ${index}`);
    
// }


for (let index = 0; index <= 20; index++) {
    if (index == 5){
        console.log("detected 5");
        continue
    }
    console.log(`value of i is ${index}`);
    
}