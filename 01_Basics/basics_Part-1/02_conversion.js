console.log(2>1)
console.log(2>=1)
console.log(2<1)
console.log(2==1)
console.log(2!=1)


console.log("2">1);
console.log("02">1); 
//in the above example javascript converted the string into number automatically and tghen conversion takes place 


console.log(null>0);
console.log(null==0); //equality check operator
console.log(null>=0); //here null is convetred into 0 and then comparison takes place ( >= comparison operator)

//the reason is that an equality check (==) and comparison (<,>.<=,>=) works differently 
//comparison converts null to  an number testing it as 0, thats why null>=0 is true and null==0 is false\


console.log (undefined ==0);
console.log (undefined <0);
console.log (undefined >=0);
//for undefined equality check and comparison gives same result and gives false as result

//******************** Strict check(===)*********************
//check the value strictly and checks the datatypes
console.log ("02"===1);