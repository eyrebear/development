// allows user to input number data
const readline = require('readline-sync')
const operation = readline.question("Do you want to 'add', 'subtract', 'multiply', 'divide': ")
const num1 = readline.question("Please enter your first number: ")
const num2 = readline.question("Please enter your second number: ")

// function result(){
//     if(operation === 'add') {
//         return Number(num1) + Number(num2);  
//         console.log(`Your result is: ${add(num1, num2)}`)

//      }  else if(operation === 'subtract') {
//          console.log(`Your result is: ${subtract(num1, num2)}`)
//      }  else if(operation === 'multiply'){
//         console.log(`Your result is: ${multiply(num1, num2)}`)
//      }  else if(operation === 'divide'){
//         console.log(`Your result is: ${divide(num1, num2)}`)
//      }
    
// }


function add(num1, num2) {
    return Number(num1) + Number(num2);  
}
function subtract(num1, num2){
    return Number(num1) - Number(num2);
}
function multiply(num1, num2){
    return Number(num1) * Number(num2);
}
function divide(num1, num2){
    return Number(num1) / Number(num2);
}
 if(operation === 'add') {
    console.log(`Your result is: ${add(num1, num2)}`)
 }  else if(operation === 'subtract') {
     console.log(`Your result is: ${subtract(num1, num2)}`)
 }  else if(operation === 'multiply'){
    console.log(`Your result is: ${multiply(num1, num2)}`)
 }  else if(operation === 'divide'){
    console.log(`Your result is: ${divide(num1, num2)}`)
 }



// variables
// trying out variable instead of function for each equasion
// so if statement can return calculation grabbed from user input


//if each is a function, an example:
// function devide() {
//     var divide = num1 / num2
//     if (num2 === 0) {
//         console.log("error! You may not devide by zero!  Please enter another number: ");
//      readline(num2)
//     }
//
// }

// if one function, using operator variable, then here is an example:
// function operation() {
 //   if 
//}



//user input for first number:

//console.log('Hi ' + userName + '!');
//readline(num1)
//output message requesting second number:
//console.log("Please enter your second number: ")
//user input for second number:
//readline(num2)
// output message asking for desired operation:
//console.log("Please enter the operation to perform, either add, subtract, multiply, or devide: ")
//user input for desired operation:
//readline(operation)
 