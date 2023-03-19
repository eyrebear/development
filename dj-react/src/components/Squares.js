import React, {useState} from "react"


export default function Squares(props) {
    return(
        <div className="box" style={{backgroundColor: props.color}} onClick={props.handleClick}></div>
    )
}