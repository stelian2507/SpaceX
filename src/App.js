// App.js

import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';



const statement = <h1> React is cool! </h1>;
function App() {
  useEffect(() =>{
    axios.get('https://api.spacexdata.com/v4/launches/latest')
    .then((res) => {
console.log(res);

    })
  },[])

  return <div className="App">
 {statement} 
  </div>;
}

export default App;
