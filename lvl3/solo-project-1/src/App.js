import logo from './logo.svg';
import './App.css';
import Info from "./Info.js";
import About from "./About";
import Favorites from './Favorites';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Info />
      <About />
      <Favorites />
      <Footer />
      {console.log("string test")}
      

      
      
    </div>
  );
}

export default App;
