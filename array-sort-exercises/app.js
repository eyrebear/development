console.log("greetings")

let numArr = [1, 3, 5, 2, 90, 20];
// sort the array from least to greatest number
// function leastToGreatest(arr) {
//     // your code here
//   }
  
//   console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90]
numArr.sort((a, b) => a - b);
console.log(numArr);

//------------------------------------------------------
//sort the array from greatest to least number
numArr.sort((a,b) => b - a);
console.log(numArr);

//---------------------------------------
//sort array of strings from shortest to longest string
let canineArr = ["wolf", "puppy", "labradoodle", "cattle dog", "pug", "belgian malinois", "weimaraner"];

canineArr.sort((a, b) => a.length - b.length);
console.log(canineArr);

//----------------------------------------------
//sort array alphabetically  ---hey, sort does that!---
canineArr.sort();
console.log(canineArr);

//----------------------------------------------
//sort array of ojects by age
let userAges = [
    {   name: "Dracula",
        age: 591
    },
    {   name: "Frankenstein",
        age: 6 
    },
    {   name: "Mummy",
        age:  5000
    }, 
    {   name: "Zombie",
        age: 10
    },
    {   name: "Ghoul",
        age: 35 
    },

]

userAges.sort((a, b) => a.age - b.age);
console.log(userAges);