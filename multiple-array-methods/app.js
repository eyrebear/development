console.log("greetings");

let peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]
// console.log(peopleArray);

let olderThanEighteen = peopleArray.filter((person) => person.age > 18 === true);

// console.log(olderThanEighteen);

olderThanEighteen.sort(function(a, b){

    if(a.lastName < b.lastName){
        return -1
    }
    if (a.lastName > b.lastName){
        return 1
    }
    return 0;
})
// console.log(olderThanEighteen);

const htmlReady = olderThanEighteen.map(person => (`<li>${person.firstName} ${person.lastName} is ${person.age}</li>`));
console.log(htmlReady);

