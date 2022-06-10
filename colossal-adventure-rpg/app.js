const readline = require("readline-sync");
const name = readline.question("Greetings! Welcome to your adventure!  Let's get started by telling me your name! ");

console.log(`Welcome back to high school! In this adventure, you, ${name}, are a student trying to beat the bell. Get to class on time or you'll lose and get detention!`);
let inventory = {
    timeLeft: 0,
    inventory: []
}
//let randArray = ["pencil", "half-eaten homework", "notebook"]
let player = {
    name: name,
    hp: 15,
    inventory: []
}
let enemiesArray = [{
        name: "School Bully",
        hp: 15,
        //isConquered: false,
    },
        {name: "Vending Machine",
        hp: 15,
        //isConquered: false,
    },
    {
        name: "Pretty Girl",
        hp: 15,
        //isConquered: false,
    }
]

function walk (){
console.log("you are walking")
    destination += 1;  // this is so that the player can win the game when they get to class.  Needs to be tied with walking to class, not main loop.
    console.log(destination + " times walking in loop")
    monsterChance()
    // let enemyPresent = Math.floor(Math.random() * 100) < 30;
    // if(enemyPresent){
        
    // }

}  

function monsterChance() {
    console.log("this is the monster Appears function")
    let enemyPresent = Math.floor(Math.random() * 100) < 30;
    if(enemyPresent){
        //monsterLineup();
        shouldIFight();
    }
    
}

function shouldIFight(){
    console.log("I am in the Should I Fight dilema");
    const willFight = readline.question(`Distraction Ahead! Will you waste time to see what it is, or get to class? Press "W" to walk to class, or "S" to stay: `);  //keyInYN is not actually working, I was not comparing it correctly
    if(willFight === "s" || willFight === "S"){
        fight()
    }
    if(willFight === "w" || willFight === "W") {
    console.log("I'm a lover not a fighter");
     run();
    
}}

function monsterLineup() {
    console.log("I am in the monsterLineup");
    let randomEnemy = enemiesArray[Math.floor(Math.random() * enemiesArray.length)];
    console.log(randomEnemy);
    if(randomEnemy.name === "School Bully"){    
        console.log("You see the SCHOOL BULLY!!! He's always stealing lunch money!");
    } else if (randomEnemy.name === "Vending Machine"){
        console.log("FOOD!! You see a VENDING MACHINE full of tempting junk food!")
    } else if (randomEnemy.name === "Pretty Girl"){
        console.log("Ooooh La La! You see the pretty red haired girl that you have always wanted to talk to!")
    }
    //shouldIFight();
    ;
    return randomEnemy;
//     console.log("I am in the Should I Fight dilema, not a function");
//     const willFight = readline.question(`Will you be distracted and waste time, or get to class? Press "W" to walk to class, or "S" to stay: `);  //keyInYN is not actually working, I was not comparing it correctly
//     if(willFight === "s" || willFight === "S"){
//         fight(randomEnemy)
//     }
//     if(willFight === "w" || willFight === "W") {
//     console.log("I'm a lover not a fighter");
//      run();
    
// }

 }

 function fight(currentEnemy){
    currentEnemy = monsterLineup()
    console.log("You have entered a FIGHT!")
    

while(player.hp > 0 && currentEnemy.hp > 0){
    let monsterAttack = Math.floor(Math.random() * 10) + 1
    console.log(`You're losing time! you've lost ${monsterAttack} minutes!`)
    let currentHp = Number(player.hp) - Number(monsterAttack);
    console.log(`YOU HAVE ${currentHp} MINUTES LEFT!`)
    player.hp = currentHp;

    let playerAttack = Math.floor(Math.random() * 10) + 1
    console.log(`OPPONENT GOT BOPPED FOR ${playerAttack}`)
    let monsterHp = Number(currentEnemy.hp) - Number(playerAttack);
    console.log(`OPPONENT HAS ${monsterHp} POWER OF DISTRACTION LEFT`)
    currentEnemy.hp = monsterHp;

    if(player.hp <= 0 && currentEnemy.hp <= 0){
        console.log(`Double K.O.!!!!!!`)
    }
    if(player.hp <= 0){
        console.log(`Oh no ${name}! You ran out of time and you got DETENTION! You Lose!`)
    } else if(currentEnemy.hp <= 0){
        console.log("You Win!")
        player.inventory.push("pencil")
        console.log(player.inventory)
        destination = 10;
    }
    
    const inventory = readline.question("Press 'P' to look in your backpack ");
    if(inventory === "p" || inventory === "P"){
        console.log(player)
    }
    
}

}
function run(){
console.log("I'm in the run function")
let cantEscape = Math.floor(Math.random() * 2)

if(cantEscape === 0){
console.log("There will be no running! You get distracted!!")
fight()
}

}

//--------------while loop--------------------------------------------------------------------------------------------------------------
let destination = 0;

while(player.hp > 0){
    destination +=1
    console.log(player.hp)
    walk()
    
// function walk (){
//     console.log("you are walking")
//         destination += 1;  // this is so that the player can win the game when they get to class.  Needs to be tied with walking to class, not main loop.
//         console.log(destination + " times walking in loop")
//         monsterAppears()
        // let enemyPresent = Math.floor(Math.random() * 100) < 30;
        // if(enemyPresent){
            
        // }
    
    //}

    // const walking =  readline.question(`Hurry ${name}, or you'll be late to class! Press "W" to walk, or "L" to loiter: `)   //will this always be one off? This doens't print until already walking
    // if(walking === "w" || walking === "W"){     // "y" and "n" is not actaully working.  It also perpetually asks this question, but I don't know if I can have the question outside of the function
    //     console.log("You are walking");
    //     walk()
    // }  //monster appears function
    // else if(walking === "l" || walking === "L") {
    //     let currentHp = Number(player.hp) - Number(2);  //I need something to globaly track hitpoints  --- It already is because player.hp is changed, so it can be accessed!
    //     player.hp = currentHp;
    //     console.log(currentHp);
    //     console.log(`Your time is running out! You only have ${player.hp} minutes left!`);
        
    //     }
    
    
    //  walk()
    if(destination === 10){
        if(player.hp === 1){
        console.log(`Congratulations ${name}! You beat the bell and made it class on time with ${player.hp} minute left!  YOU WIN!!!`);
        break;
        } else console.log(`Congratulations ${name}! You beat the bell and made it class on time with ${player.hp} minutes left!  YOU WIN!!!`);
        break;
     }
    // if(player.hp === 1){
    //     console.log("You ran out of time and got detention!")
    // }

   
}
//------------------------------------------------------------------------------
        
//hitpoints is timeLeft.  If you run out of time before getting to class it's game over
// let progress = 0;
// let timeLeft = 50;
// function walking(){
//         progress += 1
        // console.log("you are in the loop")
    //  if (progress === 10 || timeLeft < 1) {
    //      //gameOver= true
    //        console.log(`this is your progress: ${progress}`)
       //}
//}

//    const walking =  readline.question(`Hurry ${name}, or you'll be late to class! Are you ready? `)   //will this always be one off? This doens't print until already walking
//     if(walking === "y"){     // "y" and "n" is not actaully working.  It also perpetually asks this question, but I don't know if I can have the question outside of the function
//         console.log("You are walking")
//     }
//         //monster appears function
//         else if(walking === "n") {
//         let currentHp = Number(player.hp) - Number(2);  //I need something to globaly track hitpoints
//         player.hp = currentHp;
//         console.log(currentHp)
//         console.log(`Your time is running out! You only have ${currentHp} minutes left!`)
//         if(currentHp === 0){
//             console.log(`Oh no ${name}! You ran out of time and you got DETENTION! You Lose!`)
//         }
//     }

  // let randomEnemy = enemiesArray[Math.floor(Math.random() * enemiesArray.length)];
    // console.log(randomEnemy);
    // if(randomEnemy.name === "School Bully"){    //I don't think I'm accessing this object correctly, because I don't get anything printing out
    //     console.log("You see the SCHOOL BULLY!!! He's always stealing lunch money!");
    // } else if (randomEnemy.name === "Vending Machine"){
    //     console.log("FOOD!! You see a VENDING MACHINE full of tempting junk food!")
    // } else if (randomEnemy.name === "Pretty Girl"){
    //     console.log("Ooooh La La! You see the pretty red haired girl that you have always wanted to talk to!")
    // }
    // shouldIFight();
    // // ;
    // return randomEnemy;

 // let myLostHp = Number(myStartHp) - Math.floor(Math.random() * 10) + 1;
    // let monsterLostHp = Number(monsterStartHp) - Math.floor(Math.random() * 10) + 1;
    // let myRemainHp = Number(myStartHp) - Number(myLostHp);
    // let monsterRemainHp = Number(monsterStartHp) - Number(monsterLostHp);
    // randomEnemy.hp = monsterRemainHp;
    // player.hp = myRemainHp;
//Saturday's expiriment         enemy = monserlineup()



    //Friday's experiment
//Nothing is printing here.  At first I had an infinite loop before I addded math above.
    // while(player.hp > 0 && randomEnemy.hp > 0){
    //     loopCount++;
    //     console.log(loopCount)
    //     let myLostHp = Number(myStartHp) - Math.floor(Math.random() * 10) + 1;
    //     console.log("This is how many hp I lost: " + myLostHp);
    //     let monsterLostHp = Number(monsterStartHp) - Math.floor(Math.random() * 10) + 1;
    //     console.log("This is how many hp the enemy lost:" + monsterLostHp);
    //     let myRemainHp = Number(myStartHp) - Number(myLostHp);
    //     let monsterRemainHp = Number(monsterStartHp) - Number(monsterLostHp);
    //     randomEnemy.hp = monsterRemainHp;
    //     player.hp = myRemainHp;
    //     console.log("The monster attacks");
    //     // let myRemainHp = Number(myStartHp) - Number(myLostHp);
    //     console.log(`You were hit for ${myLostHp} and now you have ${myRemainHp} left!`);
    //     console.log(`${name} attacks!`);
    //     //let monsterRemainHp = Number(monsterStartHp) - Number(monsterLostHp);
    //     console.log(`You hit ${randomEnemy.name} for ${monsterLostHp} and they now have ${monsterRemainHp} left!`);
    //     console.log(myRemainHp + " hit points left TEEEEEEEESSSSSSSTTTTTT");
    // }

    // shouldIFight();
    // const willFight = readline.question(`Will you be distracted and waste time, or get to class? Press "W" to walk to class, or "S" to stay: `);  //keyInYN is not actually working, I was not comparing it correctly
    //     if(willFight === "s" || willFight === "S"){
            
       
        // fight(randomEnemy);
    
        // if(willFight === "w" || willFight === "W") {
        //     console.log("I'm a lover not a fighter");
            // let enemyStillPresent = Math.floor(Math.random() * 100) < 50;
            // if(enemyStillPresent){
            //     const stillFight = readline.question(`Oh no ${name}! You're having trouble leaving the scene! Will you give in and waste time, or walk to class? Press "W" to walk to class, or "S" to stay: `);
            //     if(stillFight === "s" || stillFight === "S"){
            //         let fightHp = Number(player.hp)
            //     console.log(fightHp + " hit points left TEEEEEEEESSSSSSSTTTTTT");
            //     } else if(stillFight === "w" || stillFight === "W"){
            //         console.log("I'm Going to get to Class!!");
            //     }
            // }
        //}

// const choice = ["walk","exit game"]
// const index = readline.keyInSelect(choice, `Hurry ${name}, or you'll be late to class! `)
// choice[index] === "walk" && walking();
// choice[index] === "exit game" && timeLeft === 0;
// console.log("hello")


//  while(progress !== 10 ){//|| timeLeft > 0){
//      walking()
//     console.log("you are in the loop")
//      let enemyPresent = Math.floor(Math.random() * 100) < 33;
//      let choiceFight = ["get to class", "get distracted"]
//     if(enemyPresent){
//     const index2 = readline.keyInSelect(choiceFight,`Will you be distracted, or will you run to class? `);
//     choiceFight[index2] === "fight" && progress === 10;
//     choiceFight[index2] === "flight" && walking();
//     }
//     //  if(enemyPresent){

//     //  }

//  }
































//Decided to make a much simpler game
// const name = readline.question("Greetings! Welcome to your adventure!  Let's get started by telling me your name! ");

// console.log(`In this adventure, you, Dr. ${name}, are a scientist gathering elements and research for a successful future colony on Mars. As you explore and research, you may encounter Elementals in your path.  Perhaps there is a special Element that can prepare the future of the colony?? `);
// let discoveries = []// future discoveries and drops "microscope", "Earth Element", "Air Element", "Fire Element", "Water Element", "Fifth Element"]
// let enemies = ["Earth", "Air", "Fire", "Water"]
// // researchPapers represent hitpoints, 20 are needed at endgame to be successful
// let researchPapers = 30;
// function walking(){
//     progress += 1

//     if (progress === 10 || researchPapers < 1) {
//         gameOver= true
//         return num;
//     }
    
// }

// function fightOrNot() {

// }

// // use for future run or fight
// const fightOrFlight = readline.question(`Do you want to weather the storm and face the Elemental to "learn its secrets, or "run to safety? `)
// fightOrFlight 



// let progress = 0
// let gameOver = false
// while (!gameOver) {

//     let choice = ["walk","exit game"]
//     const index = readline.keyInSelect(choice,`Dr. ${name}, we must get on with the journey!  continue on your adventure! `)

//     console.log('progress', progress)
   
//     choice[index] === 'walk' && walking()
//     choice[index] === 'exit game' && gameOver === true
    
//     let enemyPresent = Math.floor(Math.random() * 100) < 25
//     if (enemyPresent) {
//         const fightOrFlight = ['run', 'fight']
//         let indexFight = readline.keyInSelect(fightOrFlight,`Do you want to weather the storm and face the Elemental to learn its secrets, or run to safety? `)

//         if (fightOrFlight[index] === 'run') {
//             enemyPresent = Math.floor(Math.random() * 100) < 50;
//             return enemyPresent;

//         } else if (fightOrFlight[index] === 'fight') {

//         }

//     }
    


   






    //const walk = readline.question(`Dr. ${name}, we must get on with the journey!  press the "w" key to continue on your adventure! `)
    //  while(walk()) {

    //     console.log("You are walking")
    //     if(walk === "r"){
    //         console.log("you have exited the game");
    //         gameOver = true;
        
    