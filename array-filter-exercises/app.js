console.log("greetings");

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//return numbers that are 5 or greater
const fiveOrGreater = numArr.filter(num => num >= 5);

console.log(fiveOrGreater);
//-------------------------------------------------
//return only even numbers

// const evenNums = numArr.filter(function(num){
// if(num % 2 === 0){
//     return true;
// }
// })
//es6 version:
const evenNums = numArr.filter(num => num % 2 === 0);

console.log(evenNums);

//-----------------------------------------------
//retrun strings that are 5 or more in length
const stringArr = ["wolf", "wolves", "fox", "foxes", "labradoodle", "pug", "coyote", "jackal", "kit"];
const fiveOrLonger = stringArr.filter(canine => canine.length <= 5);

console.log(fiveOrLonger);

//-----------------------------------------------
//filter out non-members of the club
const actors = [
    {   name: "Will Smith",
        member: false
    },
    {   name: "Tom Cruise",
        member: true
    },
    {   name: "Carmine Cairdi",
        member: false
    },
    {   name: "Samuel L Jackson",
        member: true
    },
    {   name: "Chris Evans",
        member: true
    },
]

const academyMembership = actors.filter(actor => actor.member === true);
console.log(academyMembership);

//-----------------------------------------------
//array of people who are over 18, to see the matrix
const people = [
    {
        name: "Sheldon Cooper",
        age: 8
    },
    {
        name: "Fred Flinstone",
        age: 18
    },
    {
        name: "Wilma Flinstone",
        age: 19
    },
    {
        name: "Bugs Bunny",
        age: 35
    },
    {
        name: "Daffy Duck",
        age: 17
    },
]

const matrixAge = people.filter(person => person.age > 18);
console.log(matrixAge);
