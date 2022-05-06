const readline = require("readline-sync")
//collect user name
const name = readline.question("What is your name? ")
//present choices in index and collect selection
// const choice = ['put hand in hole', 'open the door', 'look for key'],
// index = readline.keyInSelect(choice, 'What is your move?');
//console.log('Ok, ' + name + ' goes to your room.');

let gameOver = false;
let foundKey = false;

//var choice = readline.question("What is your move, " + name + "? Do you want to put hand in hole, open the door, or look for a key?")
//FUNCTION to reduce redundancy
//var escapeGame = function(choice){
  //var choice = readline.question("What is your move, " + name + "? Do you want to put hand in hole, open the door, or look for a key?")
//return choice;
//}

//loop to continue game until character dies, cancels, or unlocks the door
//   while (gameOver != true) {
//     //list options that continue to populate 
//     const choice = ["put hand in hole", "open the door", "look for key"]
//       index = readline.keyInSelect(choice, "What is your move, " + name + "?")
//      const foundKey = false;

//       if (choice === 0){
//         gameOver = true;
//         console.log("Bummer " + name + ", strange holes are dangerous, and you died!")
//         const playAgain = readline.question("Would you like to play agian, " + name + "? 'Y' or 'N'")
//         if (playAgain === N || playAgain === n){
//           gameOver = true;
//         }
//       } if (choice === 2){
//         foundKey = true;
//         console.log("What's this, " + name + "? You found a key! I wonder if it unlocks something? ")
//       } if (choice === 1 && foundKey === false) {
//         console.log("The door is locked " + name + ", you should look for a key. ")
//       } else if (choice === 1 && foundKey === true) {
//         console.log("Congratulations " + name + "! You have escaped the room! ")
//         const playAgain = readline.question("Would you like to play agian, " + name + "? 'Y' or 'N'")          
//        if(playAgain === Y || playAgain === y){
//              gameOver = true;           
//            } else {
//            foundKey = false;
//            gameOver = false;
//            }
//       }
//  }


 while (gameOver === false) {
  //list options that continue to populate after answering question and still in game
   var choice = readline.question("What is your move, " + name + "? Do you want to put hand in hole, open the door, or look for a key?")
   //escapeGame()

    if (choice === "put hand in hole"){
      
      console.log("Bummer " + name + ", strange holes are dangerous, and you died!")
      var playAgain = readline.question("Would you like to play agian, " + name + "? 'Y' or 'N' ")
      if (playAgain === "N" || playAgain === "n"){
        gameOver = true;
        //break;
      } else {
        //escapeGame(choice)//
        //readline.question("What is your move, " + name + "? Do you want to 'put hand in hole', 'open the door', or 'look for a key'?")
        gameOver = false;
      }
    }
      
     
    if (choice === "look for a key"){
      console.log("What's this, " + name + "? You found a key! I wonder if it unlocks something?")
      foundKey = true;
    }
    if (choice === "open the door" && foundKey === false) {
      console.log("The door is locked " + name + ", you should look for a key")
    } else if (choice === "open the door" && foundKey === true) {
      console.log("Congratulations " + name + "! You have escaped the room!")
      var playAgain = readline.question("Would you like to play agian, " + name + "? 'Y' or 'N' ")
      //console.log("Would you like to play again " + name + "? Y or N ? ")
      if (playAgain === "N" || playAgain === "n"){
        gameOver = true;
      }  else {
          gameOver = false;
          foundKey = false;
        }
    
  }
}




