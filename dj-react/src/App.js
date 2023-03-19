
import './App.css';
import React, {useState} from "react"
import Header from "./components/Header"
import Squares from "./components/Squares"

function App() {
 
  const [squares, setSquares] = useState(["white", "white", "white", "white"])


  // function for turning all squares black or white truthy? with BUTTON
  function smallTimeDJ() {
    setSquares(prevSquares => prevSquares.map(square => square === "black"? "white" : "black"))
    }
//       prevSquares.map((square) => {
//         return square.backgroundColor === "white" ? {backgroundColor: "black"} : {backgroundColor: "white"}
//     })
//   }
// }

function partyDJ() {
  setSquares(prevSquares => [prevSquares = "purple", prevSquares= "purple", ...prevSquares])
}

  



  return (
    <div className="App">
      <Header/>
      <h1>Ford's DJ React</h1>
      <div className="boxes">
        <Squares color={squares[0]}/>
        <Squares color={squares[1]}/>
      <div className="boxes">
        <Squares color={squares[2]}/>
        <Squares color={squares[3]}/>
      </div>
      <button className="buttons" onClick={smallTimeDJ}>SmallTime DJ</button>
      <button className="buttons" onClick={partyDJ}>Party DJ</button>
      </div>

      
      

    
    </div>
  );
}

export default App;
