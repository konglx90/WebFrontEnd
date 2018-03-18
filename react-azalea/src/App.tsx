import * as React from 'react';
import './App.less';

import { NavBar, Download } from './components';

class App extends React.Component<{}> {
  render() {
    return (
      <div className="App">
        <NavBar curLink={'download'} />
        <Download />
      </div>
    );
  }
}

export default App;
