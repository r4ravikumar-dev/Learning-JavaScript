// Immediately Invoked Function Expression (IIFE)


(function just () {
    //named IIFE
    console.log(`CodeGard.in`);
}) ();

// this is the synatx foer the IIFE here in the first parathenseses we wite the function itself and then after that we call the function itself , IIFE is used for removing the polution caused due to global scope

// if we want to create two IIFE function then we have to end the first IIFE function with the semicolon other-wise it will give an error 

// IIFE function can take Arrow function too


( (name) => {
    // simple IIFE or unnamed IIFE
    console.log(`A codeGard.in product ${name}`);
})("Just")