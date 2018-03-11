// @flow

import React, { Component } from 'react';

type State = {
  count: number
}

/**
 * 1. set isBatchingUpdates = true
 * 2. componentDidMount ->( setState -> setState -> setTimeout[back] -> ( setState -> setState) )
 * 3. [back] set isBatchingUpdates = false
 * 4. so setState in setTimeout will not use batched Updates
 */

class SetStateTest extends Component<{}, State> {

  state = {
    count: 0,
  }

  componentDidMount() {

  }

  handleClick = () => {
    console.log('click start');
    this.setState({
      count: this.state.count + 1,
    }, () => {
      console.log('set state callback');
    });
    console.log(this.state.count);
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);

    setTimeout(() => {
      console.log('click start');
      this.setState({
        count: this.state.count + 1,
      }, () => {
        console.log('cb')
      });
      console.log(this.state.count);
      this.setState({
        count: this.state.count + 1,
      });
      console.log(this.state.count);
    }, 0);
  }

  hello = (n: number) => {
    return n * 2;
  }

  render() {
    console.log('render', this.state.count);
    return (
      <div className="set-state">
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>inc</button>
      </div>
    );
  }
}

export default SetStateTest;
