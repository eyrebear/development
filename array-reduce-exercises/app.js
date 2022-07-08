console.log("greetings");

//turn an array of numbers into a total of all the numbers
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reduced = nums.reduce(function(final, num){
    final += num; //final = final + num
    return final;

})

console.log(reduced)
//------------------------------------------------
//turn an array of numbers into a long string
const stringed = nums.reduce(function(final, num) { 
//    const numString = nums.reduce(function(final, num){
//     final = final.concat(num.toString())
//     return final
//  }, [])
 // concat(num)

        // final = final.concat(num.toString());  //num.tostring is 10 string, final.tostring is 1 string
        final = final.concat(num);
        // final = final.toString();
        
        
    return final;
 }, "")
// console.log(numString)

console.log(stringed);
console.log(typeof(stringed))
//----------------------------------------------------
// turn an array of voter objects into a count of how many people voted

let voters = [
    {   name: "Fred",
        voted: true 
    },
    {   name: "Wilma",
        voted: true 
    },
    {   name: "Pebbles",
        voted: false 
    },
    {   name: "BamBam",
        voted: false 
    },
    {   name: "Betty",
        voted: true 
    },
    {   name: "Barney",
        voted: false 
    }
]

const didVote = voters.reduce(function(final, voter){

    if(voter.voted === true){
        final++;
    }
    return final;
},0)

console.log(didVote);
//another way to solve, but did they want simple for loop or another method?
let testVote = 0;
let newTest = 0;

let finalTest = voters.forEach(voter =>{
    if(voter.voted === true) {
        newTest++;
    }
})

for(i = 0; i < voters.length; i++) {
    if(voters[i].voted === true) {
        testVote++;
    }
}
console.log(`this is the test vote number: ${testVote}`);
console.log(`this is the new test: ${newTest}`);

// console.log(typeof(testVote));

//----------------------------------------
//array of items on your wishlist.  how much would it cost to buy them all at once?

let wishes = [
    {
        title: "Wingspan",
        price: 45
    },
    {
        title: "cruise",
        price: 1200
    },
    {
        title: "Rav4",
        price: 20000
    },
    {
        title: "lilly white PWB gecko",
        price: 1200
    },
    {
        title: "australian cattle dog",
        price: 300
    }
]

const totalCost = wishes.reduce(function(final, wish){

    final = final + wish.price;
    return final;

}, 0)

console.log(totalCost);

//---------------------------------------------
//flatten nested array
 let nestArr = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

const flatArr = nestArr.reduce(function(final, arr){
    final = final.concat(arr)
    return final;
})

console.log(flatArr);

//-----------------------------------------------------
//take an array of voters and return an object representing how many voted from each group

var moreVoters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false},
    {name: 'young test subject', age: 22, voted: true},
    {name: 'mid test subject', age: 30, voted: true},
    {name: 'old test subject', age: 50, voted: true}
];

const voterGroups = moreVoters.reduce(function(final, group){

    if(group.age >= 18 && group.age <= 25) {
        final.youngPeople++;
        if(group.voted === true) {
            final.youngPeopleVotes++;
        }
    }
   
    if(group.age >= 26 && group.age <= 35) {
        final.midPeople++;
        if(group.voted === true) {
            final.midPeopleVotes++;
        }
    }
    if(group.age >= 36 && group.age <= 55){
        final.oldPeople++;
        if(group.voted === true) {
            final.oldPeopleVotes++;
        }
    }
    return final;

},{youngPeople: 0, youngPeopleVotes: 0, midPeople: 0, midPeopleVotes: 0, oldPeople: 0, oldPeopleVotes: 0,});

console.log(voterGroups);