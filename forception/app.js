var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var alphArr = alphabet.split("")
newArr = []
console.log(alphArr)
for(i = 0; i < people.length; i++){
    newArr = people[i].concat(alphArr)

    console.log(newArr)
}
