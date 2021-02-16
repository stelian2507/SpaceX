// App.js

import React from 'react';
import logo from './logo.svg';
import './App.css';

const element = <h1>Hello, world!</h1>;
const statement = <h1> React is cool! </h1>;
function App() {
  return <div className="App">
 {statement} {element}
  </div>;
}

export default App;
