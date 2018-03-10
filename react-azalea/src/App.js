// @flow

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { agent } from './api';

class App extends Component<{}> {
  componentDidMount() {
      agent.News.getLastest();
      console.log('ssss');
  }

  hello = (n: number) => {
    console.log(n);
    return n * 2;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
