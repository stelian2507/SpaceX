
import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import NavBar from "./components/NavBar"
import { BrowserRouter } from 'react-router-dom'
// import Home from './components/Home'


function App() {
  useEffect(() =>{
    axios.get('https://api.spacexdata.com/v4/launches/latest')
    .then((res) => {
console.log(res);

    })
  },[])

  return (
  <div className="App">

 <NavBar/>
  </div>
  );
}

export default App;
