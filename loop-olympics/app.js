for(let i = 0; i <= 9; i++){
console.log(i)
}

console.log("-------NEXT LOOP COUNTING NUMBER BACKWARDS---------")

for(let i = 9; i >= 0; i--){
console.log(i)
}

console.log("-----------Next FRUIT LOOP---------------")

const fruit = ["banana", "orange", "apple", "kiwi"]
for(i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}
////Bronze Medal
////#1 Using push to get the numbers into an array.  I repeated the loop to follow along with the instruction page
const numArr = []
for(let i = 0; i <= 9; i++){
    numArr.push(i)
}

console.log("---------------testing my new numArr for proper numbers 0 through 9---------------")
for(let i = 0; i < numArr.length; i++){
    console.log(numArr[i])
}

console.log("----NEXT LOOP CATCHING ONLY EVEN NUMBERS 0 THROUGH 100-----")

//#2 loop that that prints ony een numbers 0 through 100
var evenNumber = 0;
for(let i = 0; i <= 100; i++){
     evenNumber++
    if(i % 2 === 0){
        console.log(i)
    }  
}

console.log("-------NEXT LOOP VERIFYING EVERY OTHER FRUIT READY TO BE PUSHED-------")

//#3 push every other fruit content from fruit array into a new array
const fruitArr = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
const newFruit = []
for(let i = 0; i < fruitArr.length; i++){
    if(i % 2 === 0){
        console.log(fruitArr[i])
        newFruit.push(fruitArr[i])    
    }
 }
console.log("------TEST NEW ARRAY FOR PROPER FRUIT CONTENTS--------")
for(let i = 0; i < newFruit.length; i++){
    console.log(newFruit[i])
}

//Silver Medal
//#1 Write loop that will print out names of all of the people in the array
console.log("-------NEW PEOPLE ARRAY WITH OBJECTS-----------")
const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  //#2 Loop that pushes contents into new arrays
  const namesArr = []
  const occupationArr = []
  for(let i = 0; i < peopleArray.length; i++){
      console.log(peopleArray[i].name)
      namesArr.push(peopleArray[i].name)
      occupationArr.push(peopleArray[i].occupation)
  }
  console.log("---CHECKING MY NEW NAMES ARRAY TO MAKE SURE IT'S AS IT SHOULD BE---")
  for(let i = 0; i < namesArr.length; i++){
      console.log(namesArr[i])
  }
  console.log("-----CHECKING MY NEW OCCUPATION ARRAY FOR CONTENTS-------")
  for(let i = 0; i < occupationArr.length; i++){
    console.log(occupationArr[i])
}

  // ["Harrison Ford", "Vladimir Putin"] // names
  // ["Singer", "Entertainer"] // occupations
  

//Gold medal
//#1
console.log("------------------ARRAY NESTTED LOOP 1-----------------------")
var nestArr = [[0,0,0]]
for(i = 0; i < nestArr.length; i++){
    for(j = 0; j < nestArr[i].length; j++){
        console.log(nestArr[i])  
    }
}
 console.log("-----------------ARRAY NESTED LOOP 2---------------------")
 var nestArr1 = [[0,0,0],[1,1,1], [2,2,2]]
 for(i = 0; i < nestArr1.length; i++){
    for(j = 0; j < nestArr1[i].length; j++){ 
    }  console.log(nestArr1[i])
}
console.log("------------ARRAY NESTED LOOP 3---------------")
var nestArr3 = [[0,1,2]]
for(i = 0; i < nestArr3.length; i++){
    for(j = 0; j < nestArr3[i].length; j++){ 
        console.log(nestArr3[i])
    }  
}
//#4 I am not understanding why it is not printing in the grid like when it was numbers
console.log("------------CHANGE LAST TO X'S---------------")
var nestArr4 = [[0,1,2]]
for(i = 0; i < nestArr4.length; i++){
    nestArr3[i] = "x";
    for(j = 0; j < nestArr4[i].length; j++){
        nestArr4[j] = "x";
        console.log(nestArr4[i])
        //console.log(nestArr3)
    }  
}
// console.log("TEST")
// var testArr = [[0, 1, 2],[0, 1, 2],[0, 1, 2]]
// for(i = 0; i < testArr.length; i++){
//     //testArr[i] = "x";
//     for(j = 0; j < testArr[i].length; j++){
//         testArr[j] = "x";
//         console.log(testArr)
//     }  
// }
