console.log("greetings");

const collectAnimals = (...animals) => animals;

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]

//---------------------------------------------------------
const combineFruit = (fruit, sweets, veggies) => {
    //fruit = {fruit: fruit}
    fruit = {fruit}; //shorthand, same result
    sweets = {sweets: sweets};
    veggies = {vegetables: veggies};
    return {...fruit, ...sweets, ... veggies}
}

// console.log(combineFruit);
console.log(combineFruit(["apples", "peaches"], ["pumpkin pie", "cake"], ["carrot"]));
            //  
//=> output example: 
//    {
        // fruit: ["apple", "pear"],
        // sweets: ["cake", "pie"],
        // vegetables: ["carrot"]
 //    }

 //----------------------------------------------------------------------
// destructure
//const vacation = {
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   }
const parseSentence = ({location, duration}) => {
  return `We're going to have a good time in ${location} for ${duration}`
}
//defining the object and then calling the variable works too
const vacation = {location: "Burly Idaho", duration: "2 weeks"};
console.log(parseSentence(vacation));
// console.log(parseSentence({
//   location: "Burly Idaho",
//   duration: "2 weeks"
// }));

//-----------------------------------------------------------
//more destructure
const returnFirst = items => {
    const [firstItem] = items; /*change this line to be es6*/ //WAS const firstItem = items[0]
    return firstItem
}
console.log(returnFirst([2,3,4,5,6]));

//----------------------------------------------------------------
//even more destructuring
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

const returnFavorites = arr => {
    /*your code here*/
    const [firstFav, secondFav, thirdFav] = arr;

    return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}`;
}

console.log(returnFavorites(favoriteActivities));

//--------------------------------------------------------
//black diamond
const populatePeople = (names) => {
    return names.map((name) => {
        name = name.split(" ");
        const [firstName, lastName] = name;
        return {
            firstName: firstName, 
            lastName: lastName
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]

