
import React, { useEffect } from 'react';

import './App.css';

import NavBar from "./components/NavBar";
import { Route, Switch } from 'react-router-dom';
import SpaceShips from './components/SpaceShips';
import SpaceX from './components/SpaceX';
import Missions from './components/Missions';

import RocketDetails from './components/RocketDetails'
import MissionDetails from './components/MissionDetails'

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
        <Route exact path="/Missions" render={(props) => <Missions {...props} />} />
        <Route exact path="/Missions/:mission_id" render={(props) => <MissionDetails {...props} />} />
        <Route exact path="/SpaceShips/:rocket_id" render={(props) => <RocketDetails {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
