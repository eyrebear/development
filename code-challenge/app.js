//From Maira Soomro to Everyone 03:27 PM
function getNumberOfVowels(str) { 
  // code here
  let count = 0;
  for(let i = 0; i < str.length; i++){
    if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
        count++;
    }
  }
  return count;

}
console.log(getNumberOfVowels("hello world")) // 3
console.log(getNumberOfVowels("fishing")) // 2


let names = [ "Jerry", "Adam" ]
const person = { firstName: "Robert", lastName: "Jones", age: 37 }


names.push(person.firstName);


//------------------------------------------------
//lvl 2 mid assessment
function oneWordOnly(words){
  let newArr = words.filter(word => {
    return !word.includes(" ");
  
   })
  return newArr;
  }
  
   console.log(oneWordOnly(["bird", "bird dog", "humming bird", "dog"])) //=>["bird", "dog"]
   console.log(oneWordOnly(["house", "tiny mansion", "humming bird", "fish", "word"])) //=>["house", "fish", "word"]
   