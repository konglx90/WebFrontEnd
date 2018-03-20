import * as React from 'react';
import './App.less';
import EventHandlerTryCatch from './ReactFeatureTest/EventHandlerTryCatch';

import { NavBar, Download } from './components';

class App extends React.Component<{}> {

  renderReactTest = () => {
    return (
      <EventHandlerTryCatch />
    );
  }

  render() {

    // return this.renderReactTest();  // TODO

    return (
      <div className="App">
        <NavBar curLink={'download'} />
        <Download />
      </div>
    );
  }
}

export default App;
