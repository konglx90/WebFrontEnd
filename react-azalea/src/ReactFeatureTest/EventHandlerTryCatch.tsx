import * as React from 'react';

interface State {
  error: boolean;
}

// 在React里没问题啊
class EventHandlerTryCatch extends React.Component<{}, State> {

  state = {
    error: false,
  };

  handleClick = (event: object) => {
    console.warn('e1', event);
    try {
      console.warn('e2', event);
    } catch (error) {
      console.warn('e3', error);
      this.setState({
        error: true,
      });
    } finally {
      console.warn('finally');
    }
  }

  render() {
    return (
      <div>
        {this.state.error ? <h1>Error</h1> : <h1>Right</h1>}
        <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
}

export default EventHandlerTryCatch;
