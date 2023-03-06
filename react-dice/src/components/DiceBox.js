import React, {useState} from 'react'

export default function DiceBox(){
//write your state here
const [diceRoll, setDiceRoll] = useState(1)
const [diceArray, setDiceArray] = useState([])

function getRandomInt() {
        setDiceRoll(Math.floor(Math.random() * 6 + 1))
        //console.log(diceRoll)
        
        if(diceArray.length < 5) {
            setDiceArray((prevState => [...prevState, diceRoll]))
        }
        
        console.log(diceArray)

}

const displayDice = diceArray.map(dice => <div className="display-dice" key ={dice}>{dice}</div>)

//write function to generate random numbers


//build , import, and map over Die component to render here
    return (
        <div>
            <h3>{diceRoll}</h3>
            <div>{displayDice}</div>
            <button 
                    className="die--button"
                    onClick={getRandomInt}>
                    Roll the die
                </button>
        </div>
    )
}