import './App.css';
import Header from './components/Header';
import DiceBox from './components/DiceBox'
function App() {

  return (
    <div className="App">
      <Header/>
      <h1>Ford's React Dice App</h1>
      <div id="dicebox"><DiceBox /></div>
      


      
      
  </div>
  );
}

export default App;
