import React, { Component } from 'react';
import logo from './logo.svg';
import snag from './assets/snag.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={snag} className="App-logo" alt="logo" />
          <h1 className="App-title">Sausage Roll Marking</h1>
        </header>
      </div>
    );
  }
}

export default App;
