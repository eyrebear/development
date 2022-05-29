const readline = require('readline-sync')

//Function takes an array as an argument, compares content for which number is higher, saves it in a variable, and returns it
let numArr = [1, 6, 10, 2, 5, 0, 20, 5, 10, 5];

// const largestNum  => (...numbers){
//     const arrNums = []
//     let largest = 0

//     for(let i = 0; i < arrNums.length; i++){
//         if(arrNums[i].value > arrNums[i+1].value){
//             largest = arrNums[i].value;
//         }
//     }
//     console.log(largest)
//     return largest;
// }
function largestNum (arr) {
let largest= 0;

for(let i = 0; i < numArr.length; i++){
    if(numArr[i] > numArr[i+1]){
        largest = numArr[i];
       largest += largest;
       
    }
}
return largest;
}

console.log(largestNum(numArr))
//console.log(largest)
console.log("hello");
//console.log(numArr[0])

// function takes two arguments, one array, and one character to compare to array contents.  It will return array items that have the character present


// const found = arrayOfStrings.find(v => v.includes(str));
function isItThere(arr,str){
   let newArr = []
   for(let i = 0; i < arr.length; i++){
       if(arr[i].includes(str)){
           newArr.push(arr[i]);
       }
   }
   return newArr;
}



// function takes two number arguments and does math to determine if first argument is divisible by second argument
function isDivisible(num1, num2){
    if(Number(num1) % Number(num2) === 0){
        return true;
    }
    else return false;
}
//Two different ways of calling or inputing the number from the isDivisible function
num1 = readline.question(`What is your fist number? `);
num2 = readline.question(`What is your second number? `);
console.log(`The first number is divisible by the second number: ${isDivisible(num1, num2)}`);
console.log(isDivisible(10,2));
console.log(isItThere(["stay!", "here", "w!ll", "new"], "!"));