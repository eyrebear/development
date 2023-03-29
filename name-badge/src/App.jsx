import React , {useState} from "react"
import Navbar from "./components/Navbar"
import Form from "./components/Form"


export default function App() {

    return <div id="container">

    <nav id="navbar">
        <Navbar />
    </nav>
    <h2 className="title">Name Badge</h2>
    <Form />
    
    
    
    </div>

}