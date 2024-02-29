const accountId = 144553
let accountEmail = "r4avikumar@google.com"
var accoundPassword = "12345"
accountCity = "Jaipur"
let accountState;

//we can decelare varaible without describing whether it is let aur ver 

// accountId = 2 // not allowed because wo use accountId as constatnt so it cannot be changed here

console.log("accountId"); // for printing singlel item
console.table([accountId, accountEmail, accoundPassword, accountCity, accountState]) // for printing item in tabular form

//prefer not to use var because of issue in block scope and functional scope so for variable deceleration use let