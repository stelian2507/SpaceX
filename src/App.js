
import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import SpaceX from './components/SpaceX';
import Future from './components/Future';
import Info from './components/Info'


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
      <Route exact path="/" render={(props) => <Home {...props} />} />
      <Route exact path="/SpaceX" render={(props) => <SpaceX {...props} />} />
        <Route exact path="/Future" render={(props) => <Future {...props} />} />
        <Route exact path="/Info" render={(props) => <Info {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
