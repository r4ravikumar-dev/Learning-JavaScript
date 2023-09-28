console.log(window.document) // return all informationn of that document like function, method and everything of the document

console.log(documnent); // returns only HTML related informationn of the document

cconsole.dir(document); // return all the information of that document like console.log(window.document) method



//DOM selector NodeList and HTML collection

document //to access the complete document

document.getElementById('') // to get access of that particular Id

document.getElementById('title').id //to return the name of that id

document.getElementById('title').className //return the name of that calss

document.getElementById('title').getAttribute('id') //Returns element's first attribute whose qualified name is qualifiedName, and null if there is no such attribute otherwise.

document.getElementById('title').setAttribute('class', 'test heading') //Sets the value of element's first attribute whose qualified name is qualifiedName to value.



const title = document.getElementById('id') //stores the element in the variable named title

title.textContent //get the text of that element

title.innerHTML // get the text of that element

title.innerText //get the text of that element