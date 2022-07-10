console.log("greetings");
//I thought it wanted to me specify data type in the constructor, and then I realized that would be int he variable parameters
// this.name = new String(name)
// this.status = new String(status)
// this.totalCoins = new Number(totalCoins)
// this.hasStar = new Boolean(hasStar)


class Player {
    constructor (name, status, totalCoins, hasStar) {
        this.name = name                                                   
        this.status = status
        this.totalCoins = totalCoins
        this.hasStar = hasStar
    }
    //making these fat arrow functions got weird when it came time to cosole log player1, and it showed all the functions are part of the object
    setName(pickedName) {
        if(pickedName === `Mario` || pickedName === `mario`) {
            return this.name = `Mario`;
        } else if(pickedName === `Luigi` || pickedName === `luigi`) {
            return this.name = `Luigi`;
        }
    }

    goHit() {
        if(this.hasStar === true) {
            this.status = this.status
            console.log(`Your STAR protected you!`);
            this.hasStar = false;
        } else if(this.status === "small") {
            this.status = "DEAD";
            console.log(`--GAME OVER-- You Died! --GAME OVER--`)
        } else if(this.status === "Big") {
            this.status = "small"
        } else if(this.status === "POWERED UP") {
            this.status = "Big"
        }
    
    }

    gotPowerup() {
        if(this.status === `small`) {
            this.status = `Big`;
        } else if(this.status === `Big`) {
            this.status = `POWERED UP`;
        } else if(this.status === `POWERED UP`) {
            console.log(`Congratulations, you got a STAR!`);
            this.hasStar = true;
        }
    }
    
    addCoin() { 
        this.totalCoins +=1;
    }

    print() {
       console.log(`Name: ${this.name}
Status: ${this.status}
Total Coins: ${this.totalCoins}`)
       if(this.hasStar === true) {
        console.log(`You have a STAR`)
       }
       if(this.status === "DEAD") {
        console.log(`Your final score is ${this.totalCoins}`)
       }
       console.log(`
       `);
    }
    //functionName() {
        //do this thing console.log(this.somthing) or console.log("vrooom");
  //  }

    //notherFunctionName() {
        //do this thing
  //  }
}

// setName = pickedName => {
//     if(pickedName === `Mario` || pickedName === `mario`) {
//         Player.name = `Mario`;
//     } else if(pickedName === `Luigi` || pickedName === `luigi`) {
//         Player.name = `Luigi`;
//     }
// }


const player1 = new Player("Mario", "small", 0, false);
//player1.setName("mario");
// const mario = new Player("Mario", "small", 0, false);
//let randNum;
getNum = () => {randNum = Math.floor(Math.random() * 3)
    if(randNum === 0) {
        player1.goHit();
        player1.print();
  
    } if(randNum === 1) {
        player1.addCoin();
        player1.print();
    }
 if(randNum === 2) {
    player1.gotPowerup();
    player1.print();}
    
}

// console.log(luigi.status);
// console.log(luigi)
player1.setName("mario");
// //console.log(name)
// console.log(mario.setName("mario"))
//console.log(player1.name)
//player1.hasStar = true;
// player1.gotPowerup();
//player1.addCoin();
// player1.addCoin();
//console.log(player1.status)
//console.log(player1)
// player1.print();
// player1.goHit();
// player1.print();
// player1.goHit();
//player1.print();
// player1.goHit();
// player1.print();
// player1.goHit();
// player1.print();
getNum();
getNum();
getNum();
getNum();
getNum();
getNum();
getNum();
getNum();
getNum();