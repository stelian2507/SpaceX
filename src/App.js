
import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SpaceShips from './components/SpaceShips';
import SpaceX from './components/SpaceX';
import Future from './components/Future';
import Info from './components/Info'
import RocketDetails from './components/RocketDetails'

function App() {
  // useEffect(() => {
  //   axios.get('https://api.spacexdata.com/v4/launches/latest')
  //     .then((res) => {
  //       console.log(res);

  //     })
  // }, [])

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" render={(props) => <SpaceShips {...props} />} />
        <Route exact path="/SpaceX" render={(props) => <SpaceX {...props} />} />
        <Route exact path="/Future" render={(props) => <Future {...props} />} />
        <Route exact path="/SpaceShips/:rocket_id" render={(props) => <RocketDetails {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
