import "./App.css";
import Countries from "./Components/Countries/Countries";
import Nav from "./Components/Nav/Nav";
import {useState,useEffect} from "react"

function App() {
  
  const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => setCountries(data))
    },[])
  return (
    <div className="App">
      <Nav setCountries={setCountries}></Nav>
      <h1>Country Names</h1>
      <Countries countries={countries}></Countries>
    </div>
  );
}

export default App;
