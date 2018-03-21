import * as React from 'react';
import './App.less';
import EventHandlerTryCatch from './ReactFeatureTest/EventHandlerTryCatch';

import { NavBar, Download, Footer } from './components';

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
        <Footer />
      </div>
    );
  }
}

export default App;
