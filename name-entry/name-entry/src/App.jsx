import React, {useState} from "react"
import Navbar from "./components/Navbar"
import Form from "./components/Form"


export default function App() {

  return(
  <>
    <Navbar />
    <h1 className="h1">Name Entry</h1>
    <Form />

  </>
  )
}