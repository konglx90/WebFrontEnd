// @flow

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { agent } from './api';

import SetStateTest from './react-feature-test/SetState';

class App extends Component<{}> {

  componentDidMount() {
    // agent.News.getLastest();
  }

  hello = (n: number) => {
    return n * 2;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SetStateTest />
      </div>
    );
  }
}

export default App;
