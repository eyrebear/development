import React from "react";
import Cards from "./Cards";
import data from "./data";
console.log(data);

function CardList() {
const cards = data.map(card =>
    <Cards 
    {...card}
    />)

    return (
        <div className="list">
            {cards}
        </div>
    )
}

export default CardList;