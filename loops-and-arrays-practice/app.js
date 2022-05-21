console.log("the doctor is in")
//#1 practice Loop through the following array and count how many 
//"computers" there are. Log the final count:
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var finalCount = 0
for(let i = 0; i < officeItems.length; i++){
    if(officeItems[i] === "computer"){
    finalCount++;
    }
}
console.log(finalCount)

//#2 Loop through the following array and log to the console "old enough" 
//if they are 18 or older, and "not old enough" if thy aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
  boyGirl = ""
  for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    
   
    
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
            boyGirl = "She's"
        } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
            boyGirl = "He's"
        }
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. " + boyGirl + " good to see Mad Max.")
      } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
            boyGirl = "her"
        } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
            boyGirl = "him"
        }
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max, don't let " + boyGirl + " in.")
      }
      
  }
var lightToggle = 0
var lightArr = [2, 21, 40, 100]
  for(i = 0; i < lightArr.length; i ++) {
      lightToggle += lightArr[i];  
  }
console.log(lightToggle)
if(lightToggle % 2 === 0){
  console.log("the light is off")
} else {
      console.log("the light is on")
  }
  


