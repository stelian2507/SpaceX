
import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import NavBar from "./components/NavBar"


const statement = <h1> Space X </h1>;
function App() {
  useEffect(() =>{
    axios.get('https://api.spacexdata.com/v4/launches/latest')
    .then((res) => {
console.log(res);

    })
  },[])

  return (
  <div className="App">
 {statement} 
 <NavBar/>
  </div>
  );
}

export default App;
