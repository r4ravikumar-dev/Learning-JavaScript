const myObject = {
    js: 'JavaScript',
    cpp : 'C++',
    py : 'Python',
    rb : 'Ruby'
}
for (const key in myObject) {
    // console.log(key); //for printing the key
    console.log(`${key} shortcut is for ${myObject[key]}`); // for printing the key as well as value of key too
}


// if we use forin loop in array then it will give us a key of array

const programming = ["js","py","cpp","rb","java"]
for (const key in programming) {
    // console.log(key); 
    console.log(programming[key]);
}

// in map we don't use forin loop because map in not irretable