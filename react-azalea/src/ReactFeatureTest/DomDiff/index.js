import React, { Component } from 'react';
import './styles.less';

function createComponent(name) {
  class _MyNode extends Component{
    constructor(props) {
      super(props);
      console.log(name + ' is created.');
    }
    componentDidMount() {
      console.log(name + ' did mount.');
    }

    componentWillUnmount() {
      console.log(name + ' will unmount.');
    }

    componentDidUpdate() {
      console.log(name + ' is updated.');
    }

    render() {
      return (
        <div className={'node ' + name} data-name={name}>
          {this.props.children}
        </div>
      );
    }
  }
  return _MyNode;
}

var Root = createComponent('R');
var A = createComponent('A');
var B = createComponent('B');
var C = createComponent('C');
var D = createComponent('D');

class Wrapper extends Component {

  constructor(props) {
    super(props)
    this.state = {
      shape: '',
    }
  }

  componentDidUpdate() {
    console.log('=============')
  }

  shape1 = function() {
    return (
      <Root>
        <A>
          <B />
          <C />
        </A>
        <D />
      </Root>
    );
  }

  shape2 = function() {
    return (
      <Root>
        <A>
          <B />
        </A>
        <D>
          <C />
        </D>
      </Root>
    );
  }

  shape3 = function() {
    return (
      <Root>
        <A>
          <B>
            <C />
          </B>
        </A>
        <D />
      </Root>
    );
  }

  shape4 = function() {
    return (
      <Root>
        <A>
          <B />
          <D>
            <C />
          </D>
        </A>
      </Root>
    );
  }

  shape5 = () => {
    return (
      <Root>
        <A>
          <B key="B" />
          <C key="C" />
        </A>
      </Root>
    );
  }

  shape6 = () => {
    return (
      <Root>
        <A>
          <C key="C" />
          <B key="B" />
        </A>
      </Root>
    );
  }

  setShape(shape) {
    this.setState({ shape })
  }

  renderRoot() {
    if (this[this.state.shape]) {
      return this[this.state.shape]();
    } else {
      return <Root />;
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setShape('shape1')}>Shape 1</button>
        <button onClick={() => this.setShape('shape2')}>Shape 2</button>
        <button onClick={() => this.setShape('shape3')}>Shape 3</button>
        <button onClick={() => this.setShape('shape4')}>Shape 4</button>
        <button onClick={() => this.setShape('shape5')}>Shape 5</button>
        <button onClick={() => this.setShape('shape6')}>Shape 6</button>
        <button onClick={() => this.setShape('')}>Clear</button>
        {this.renderRoot()}
      </div>
    )
  }
}

export default Wrapper;
