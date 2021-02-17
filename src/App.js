
import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import SpaceX from './components/SpaceX';
import Future from './components/Future';



function App() {
  useEffect(() => {
    axios.get('https://api.spacexdata.com/v4/launches/latest')
      .then((res) => {
        console.log(res);

      })
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/Home" render={(props) => <Home {...props} />} />
      </Switch>
      {/* <Home />
      <SpaceX />
      <Future /> */}
    </div>
  );
}

export default App;
