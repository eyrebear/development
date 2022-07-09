console.log("greetings");

//#1

let name = "John";
let age = 101;

const runForLoop =(pets)=> {
    const petObjects = [];
    for (var i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] };
        let name;
        if (pets[i] === "cat") {
            name = "fluffy";
        } else {
            name = "spot";
        }
        console.log(`pet name: ${name}`);
        pet.name = name;
        petObjects.push(pet);
    }
    console.log(`man name: ${name}`);
    return petObjects
}

runForLoop(["cat", "dog"]);

//-----------------------------------------------------------------
//#2
const carrots = ["bright orange", "ripe", "rotten"];

const mapVegetables = carrots.map((carrot) => ({type: "carrot", name: carrot}));

console.log(mapVegetables);

//----------------------------------------------------------------------------
//#3
const doMathSum = (a, b) => { return a + b };
console.log(doMathSum(1, 3));

const produceProduct = (a, b) => { return a * b };
console.log(produceProduct(2, 9));

//-----------------------------------------------------
//#4
// const printString = (firstName, lastName, age) => { return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`};

const printString = (firstName, lastName, age) => { 
    firstName = firstName || `Jane`;
    lastName = lastName || `Doe`;
    age = age || 100;
    return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`};
console.log(printString("Ford", "Eyre", 40));


// #5 
//code as is does not RETURN a boolean
// instructions : Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 const filterForDogs = animals.filter(animal => animal.type === "dog")
 console.log(filterForDogs);
//  const filterForDogs =(arr) => {

//  return arr.filter(animal => {
//     if(animal.type === "dog") {
//         return true;
//     } else {
//         return false; 
//     }
// })
// }
//--------------------------------------------------------
//Template Literals
const greeting = (firstName, location) => {
        return (`Hi ${firstName}!

Welcome to ${location}.

I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`)

}
console.log(greeting("Janice", "Hawaii"));
const sheldon = {
    name: "Sheldon",
    age: 8
}
console.log(`Hello, my name is ${sheldon.name} and I am ${sheldon.age} years old. Next year, I will be ${sheldon.age + 1} years old.`)