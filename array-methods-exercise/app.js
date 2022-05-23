var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//#1 Remove the last item from the vegetable array. pop
vegetables.pop()
console.log("vegetables: ", vegetables)
//#2 Remove the first item from the fruit array. shift
fruit.shift()
console.log("fruit: ", fruit)
//#3 Find the index of "orange." indexOf
var showMeIndexFruit = fruit.indexOf("orange")
console.log("fruit index of orange: ", showMeIndexFruit)
//#4 Add that number to the end of the fruit array. add 1 to end of fruit array. push
fruit.push(showMeIndexFruit)
console.log("fruit, index added on end: ", fruit)
//#5 Use the length property to find the length of the vegetable array. length
var veggieLength = vegetables.length
console.log("vegetables length: ", veggieLength)
//#6 Add that number to the end of the vegetable array. push
vegetables.push(veggieLength)
console.log("vegetables, prior length number added on end: ", vegetables)
//#7 Put the two arrays together into one array. Fruit first. Call the new Array "food". concat
var food = fruit.concat(vegetables)
console.log("food: ", food)
//#8 Remove 2 elements from your new array starting at index 4 with one method. splice
food.splice(4,2)
console.log("food with two items removed beginning with carrot/index 4. Tomato should aslo go: ", food)
//#9 Reverse your array. reverse
food.reverse()
console.log("food reversed: ", food)
//#10 Turn the array into a string and return it. join
var foodString = food.join()
console.log("food is now a string, separated by commas as default; ", foodString)

