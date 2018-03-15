// @flow

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.less';
// import { agent } from './api';

import DomDiff from './ReactFeatureTest/DomDiff';

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
        <DomDiff />
      </div>
    );
  }
}

export default App;
