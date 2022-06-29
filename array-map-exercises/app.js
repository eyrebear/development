console.log("hello");
//double numbers  
  // console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

  let numArr = [2, 3, 4, 5, 6, 7, 8];
// don't need to make variable for function
// const doubleNumbers = numArr => {

// }
// const newArr = numArr.map (function(number){
//     return number * 2;
// })
// i think es6 is less readable sometimes
const newArr = numArr.map(number => number * 2)
console.log(newArr);

//-------------------------------------------------------------------
//array to string
// function stringItUp(arr){
//   // your code here
// }

const strArr = numArr.map(function(number){
  return number.toString();
})

// toString()
console.log(strArr);

//-----------------------------------------
//capitalize names

let names = ["rocky", "rambo", "corleone", "MAVERICK"];
//works with es6, less lines, but harder to read, long, and ugly
//const capitalizeNames = names.map(name => name.charAt(0).toUpperCase() + name.substring(1).toLowerCase());

const capitalizeNames = names.map(function(name){
  name = name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
  return name;
})
//name[0].toUpperCase();
  //if statement didn't work
  //  if(name.indexOf(0)){
  //   name[0].toUpperCase();
  //  }
  
  // return (`${name[0].toUpperCase()}${name}`);
  // found these methods online. earlier I returned ["ROCKY", "RAMBO', "CORLEONE"] or ["R", "R", "C"] or ["Rrocky", "Rrambo", "Ccorleone"]
  // return (`${name.charAt(0).toUpperCase()}${name.substring(1).toLowerCase()}`);


console.log(capitalizeNames);

//----------------------------------------------
//make an array of strings of names from the objects
let sesameArr =
[
  {
    name: "Oscar",
    age: 63
  },

  {
    name: "Elmo",
    age: 7
  },

  {
    name: "Big Bird",
    age: 10
  },

  {
    name: "Grover",
    age: 25
  },

  {
    name: "Count",
    age: 100
  }
]

const sesameStreet = sesameArr.map(character => character.name);
console.log(sesameStreet);

//--------------------------------------------------
//make an ARRAY of who can go to the matrix based on age

const matrixReady = sesameArr.map(function(character){
  //realized I needed to change the strings in the array, not just console log a message, so made tooOld variable to take string
  let tooOld = ""
  if(character.age >= 60) {
    console.log(`${character.name} is too old!`);
    tooOld = (`${character.name} is too old!`);
  } else if(character.age < 60) {
    console.log(`${character.name} can go to the Matrix!`);
    tooOld = (`${character.name} can go to the Matrix!`);
  }
  return tooOld;
})

console.log(matrixReady);

//--------------------------------------------------------------
//make an array of the names in h1 tags, and the age in h2 tags.  I think this is all string still
//const tagArr = sesameArr.map(character => (`<h1>${character.name}</h1><h2>${character.age}</h2>))
const tagArr = sesameArr.map(function(character){
return (`<h1>${character.name}</h1><h2>${character.age}</h2>`);
})
console.log(tagArr);
