console.log("----------#1------------")
//#1 Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.
var helloString = "hello"
var capilizeAndLowercase = string => {
    string = string.toUpperCase() + string;

    return string;
}
console.log(capilizeAndLowercase("buns"))
// var helloCap = helloString.toUpperCase()
// //capilizeAndLowercase("HelLo") // => "HELLOhello"
// console.log(helloCap + helloString)

console.log("------------#2------------")
//#2 Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.
var helloWorld = "Hello World"
var halfFunction = string => {
halfLength = Math.floor((string.length / 2))
 //console.log(halfLength)
return halfLength;
}
console.log(halfFunction("hello world"))
console.log("--------------#3----------------")
//#3 Write a function that uses slice() and the other functions you've written to return the first half of the given string.
var firstHalfFunction = string => {
var sliceNum = halfFunction(string)
return string.slice(0,sliceNum)
}
// return string; I was going to adjust string variable, but did everything in return as Zak suggested
console.log(firstHalfFunction("hello world"))

console.log("-------------#4----------------")
//#4 Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.

var halfCapHalfLowFunction = string =>{
    var halfway =  halfFunction(string)
    var upperHalf = string.slice(0, halfway)
    upperHalf = upperHalf.toUpperCase()
    //console.log(upperHalf)
    var lowerHalf = string.slice(halfway)

    return upperHalf + lowerHalf
    //I kept this here to remind me that a for loop maybe doesn't work on strings, even though they are kinda arrays
    // var upperCase = ""
    // for(i = 0; i < halfway.length; i++){
    //    upperCase = halfway[i].toUpperCase()
    // }
    // return upperCase + string.slice(halfway)
}

console.log(halfCapHalfLowFunction("hello world"))