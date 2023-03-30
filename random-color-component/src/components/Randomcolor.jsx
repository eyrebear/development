import React, {useEffect, useState} from "react";
import axios from "axios"

export default function Randomcolor() {
    //initializing state color for box
    const [randColor, setRandColor] = useState("000000")
    //setting state for API colors

    const [allColors, setAllCollors] = useState([])

    // function changeColor() {
    //     setRandColor
    // }
    //useEffect function with axios get request to pull in the random colors
    //discovered an empty hex from API in index 5
    useEffect(() => {
        axios
            .get("https://www.colr.org/json/colors/random/7")
            // .then ((response) => console.log(response.data.colors))
            .then((response) => {
                setAllCollors(response.data.colors)
                console.log(response.data.colors)
            })
            .catch((error) => console.log(error));
    }, []);
// randomizing the colors using the length in the array for the math
//setting the random color to the hex in array
    function getColors() {
        const randNum = Math.floor(Math.random() * allColors.length)
        const hex = allColors[randNum].hex;
        setRandColor(hex)
        console.log(hex)
    }

    




    

    return <>
   
    <div id="display-container">
        {/* tying style to the box, needed double brackets because of the colon */}
        <div id="box" style={{backgroundColor: `#${randColor}`}}></div>
        <button id="button" onClick={getColors}>Change My Color</button>
    </div>
    
    </>
}