import React, { Component } from 'react';
import './App.css';
import Time from './time';
 

class App extends Component {
  render() {
    return (
      <div className="App">
      <Time duration={30000000}/>
      </div>
    );
  }
}

export default App;
