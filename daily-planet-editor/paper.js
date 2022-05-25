/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here.

In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/


// Written by Kent, Clark

const enemies=["Lex","Batman","Darkside","Brainiac","General Zod","Doomsday"]

for (let i = 0; i < enemies.length; i++){
    let isThereKryptonite = false;
    if (i % 2 === 0) {
        isThereKryptonite = true;
    } else {
        isThereKryptonite = false;
    }
    console.log(Who_Wins(isThereKryptonite,enemies[i]));
}

function Who_Wins(isThereKryptonite,enemyEname){
    if(!isThereKryptonite) {  
        return "Superman beats " + enemyEname + ", of course";
    }else {
        return "Depends on how quick Superman can get rid of the Kryptonite. " + enemyEname + " could possibly win this one.";
    }
}
function HowAttractedIsLoisLaneToMe (){
    // 1 is not at all attracted, 10 is "super" attracted...
    return Math.floor((Math.random()*10)+1);
}

console.log("On a scale of 1 - 10, 10 being the highest, Lois' attraction to me is a: " );
console.log(HowAttractedIsLoisLaneToMe());

let clarkKent =true;
let superman = false;

while (clarkKent){
    console.log("I'm just a nerdy columnist");
    var phoneBoothQuickChange = Math.random();
    if (phoneBoothQuickChange >= 0.5){
        clarkKent = false;
        superman = true;
        console.log("Now I'm Superman!");
    }
}
