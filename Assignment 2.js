
// Question no 1

function createAdder(num) {
  return function adder(value) {
    return num + value;
  };
}


const addFive = createAdder(5);
console.log(addFive(10)); 
console.log(addFive(20)); 
 

// Question no 2

function recursiveSearch(array, value) {
  
  if (array.length === 0) {
    return false;
  }


  const element = array[0];

  
  if (element === value) {
    return true;
  }


  const restOfArray = array.slice(1);
  return recursiveSearch(restOfArray, value);
}


const array = [1, 2, 3, 4, 5];
console.log(recursiveSearch(array, 3)); 
console.log(recursiveSearch(array, 6)); 
 

// Quesstion no 3

function addParagraphToDocument(text) {
 
  const newParagraph = document.createElement("p");

  
  newParagraph.textContent = text;

  
  const body = document.querySelector("body");

 
  body.appendChild(newParagraph);
}


addParagraphToDocument("Hello, world!");
 

// Question no 4

function addListItemToUnorderedList(text) {
  
  const newListItem = document.createElement("li");


  newListItem.textContent = text;

  
  const unorderedList = document.querySelector("ul");

  
  unorderedList.appendChild(newListItem);
}


addListItemToUnorderedList("List item 1");
addListItemToUnorderedList("List item 2");
 

// Question no 5

function changeBackgroundColor(element, newColor) {
  
  element.style.backgroundColor = newColor;
}


const myElement = document.getElementById("my-element");
changeBackgroundColor(myElement, "blue");
 

// Question no 6

function saveObjToLocalStorage(key, obj) {

  const objJson = JSON.stringify(obj);

 
  localStorage.setItem(key, objJson);
}


const myObj = { name: "John", age: 30 };
saveObjectToLocalStorage("my-object", myObject);
 

// Question no 7

function getObj1FromLocalStorage(key) {
 
  const objJson = localStorage.getItem(key);

  const obj = JSON.parse(objJson);


  return obj;
}


const myObj1 = getObj1FromLocalStorage("my-object");
console.log(myObj1);
 
// Question no 8

function saveObjectPropertiesToLocalStorage(obj) {
 
  for (const prop in obj) {
  
    localStorage.setItem(prop, obj[prop]);
  }

  
  const retrievedObj = {};


  for (const key in localStorage) {
   
    retrievedObj[key] = localStorage.getItem(key);
  }


  return retrievedObj;
}


const myObject = { name: "John", age: 30 };
const retrievedObject = saveObjectPropertiesToLocalStorage(myObject);
console.log(retrievedObject);






	




	 
