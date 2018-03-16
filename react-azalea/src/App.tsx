import * as React from 'react';
import './App.less';

import { NavBar } from './components';

class App extends React.Component<{}> {
  render() {
    return (
      <div className="App">
        <NavBar curLink={'download'} />
      </div>
    );
  }
}

export default App;
