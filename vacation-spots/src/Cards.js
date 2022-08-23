import React from "react";


function Cards(props) {
    let money ="$";
    if(props.price > 1000) {
        money = "$$$"
    } else if (props.price > 500) {
        money ="$$"
    }

    return (
        <div className="card">
            <h3>{money}</h3>
            <h1>{props.place}</h1>
            <h2>Cost: ${props.price}</h2>
            <h3>Best Time to Visit: {props.timeToGo}</h3>
            
        </div>
    )
}

export default Cards;